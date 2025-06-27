// components/forms/investor/GreenStep3.tsx

import {
  Form, FormField, FormItem, FormLabel, FormMessage, FormControl
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { LeafletMap } from "@/components/ui-elements/google-map";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LuLocateFixed } from "react-icons/lu";
import { registerInvestor } from "@/store/investor-post";
import type { AppDispatch, RootState } from '@/store/store-config';
import { DialogDescription } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  company_name: z.string().min(2, "Tashkilot nomi kerak"),
  inn: z.string().min(5, "INN raqami kerak"),
  phone_number: z.string().min(9, "Telefon raqam kerak"),
  password: z.string().min(6, "Parol kamida 6 belgidan iborat bo'lishi kerak"),
  confirm_password: z.string().min(6, "Parolni tasdiqlang"),
  address: z.string().min(1, "Manzil bo'sh bo'lmasligi kerak"),
}).refine((data) => data.password === data.confirm_password, {
  message: "Parollar mos emas",
  path: ["confirm_password"],
});

type FormData = z.infer<typeof formSchema>;

const GreenStep3 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [address, setAddress] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      inn: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      address: "",
    },
  });

  const handleLocationSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
    form.setValue("address", selectedAddress);
  };

  const onSubmit = (values: FormData) => {
    dispatch(registerInvestor(values));
  };
    const navigate = useNavigate();
  const success = useSelector((state: RootState) => state.registerInvestor.success);

  useEffect(() => {
    if (success) {
      navigate('/login'); // yoki boshqa sahifa
    } else{
        toast.error("Tasdiqlash kodingiz noto‘g‘ri!")
    }
  }, [success, navigate]);

  return (
    <>
        <Toaster position="top-right" richColors />

    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Investor ro'yxatdan o'tish</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          <FormField control={form.control} name="company_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Tashkilot nomi</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="inn" render={({ field }) => (
            <FormItem>
              <FormLabel>INN raqami</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="phone_number" render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon raqam</FormLabel>
              <FormControl><Input placeholder="998901234567" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Parol</FormLabel>
              <FormControl><Input type="password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="confirm_password" render={({ field }) => (
            <FormItem>
              <FormLabel>Parolni tasdiqlang</FormLabel>
              <FormControl><Input type="password" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="address" render={({ field }) => (
            <FormItem>
              <FormLabel>Manzil</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input {...field} value={address} onChange={(e) => setAddress(e.target.value)} />
                  <Dialog>
                    <DialogTrigger className="border rounded p-2">
                      <FaLocationCrosshairs />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle><LuLocateFixed /> Xarita orqali tanlang</DialogTitle>
                      </DialogHeader>
                      <DialogDescription>
                        Xarita orqali kerakli manzilni tanlang va "Saqlash" tugmasini bosing.
                      </DialogDescription>
                      <LeafletMap onSelect={handleLocationSelect} />
                    </DialogContent>
                  </Dialog>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2">
            Ro'yxatdan o'tish
          </Button>
        </form>
      </Form>
    </div>
    </>
  );
};

export default GreenStep3;
