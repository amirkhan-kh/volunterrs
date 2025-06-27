import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import logo from "../../../../public/voluntermedia/Logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import phoneAnime from "../../../../public/voluntermedia/animation/Animation - 1747684791916.json";
import phoneAnimeGreen from "../../../../public/voluntermedia/animation/greenstep3.json";
import { z } from "zod";
import { LuLocateFixed } from "react-icons/lu";
import "./_style.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store-config";
import { setRole } from "@/store/role-slice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { LeafletMap } from "../google-map";
import { registerVolunteer } from "@/store/volunter-post";
import { useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

const formSchema = z
  .object({
    phone_number: z.string().min(7, "Telefon raqam noto‘g‘ri"),
    password: z.string()
      .min(8, "Parol kamida 8 ta belgidan iborat bo‘lishi kerak")
      .refine(val => isNaN(Number(val)), {
        message: "Faqat raqamlardan iborat parol bo‘lmasligi kerak",
      }),

    confirm_password: z.string().min(6, "Parolni qayta kiriting"),
    name: z.string().min(2, "Ismingizni kiriting"),
    surname: z.string().min(2, "Familiyangizni kiriting"),
    date_of_birth: z.string().min(1, "Tug‘ilgan sana kerak"),
    address: z.string().min(1, "Manzil bo‘sh bo‘lmasligi kerak"),
    gender: z.enum(["M", "F"], { required_error: "Jinsni tanlang" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Parollar mos emas",
    path: ["confirm_password"],
  });

type FormSchemaType = z.infer<typeof formSchema>;

export const Step3: React.FC = () => {
  const [address, setAddress] = useState("");
  console.log("Address:", address);

  const dispatch = useDispatch<AppDispatch>();
  const role = useSelector((state: RootState) => state.role.role);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      surname: "",
      date_of_birth: "",
      address: "",
      gender: undefined,
    },
  });

  const verified = useSelector((state: RootState) => state.verify.verified);
  console.log("Verified status:", verified);

  const onSubmit = (values: FormSchemaType) => {
    if (!verified) {
      alert("Iltimos, telefon raqamingizni SMS orqali tasdiqlang.");
      return;
    }

    dispatch(registerVolunteer(values));
    console.log("Form submitted with values:", values);
  };

  useEffect(() => {
    const storedRole = localStorage.getItem("role") as "volunterr" | "investor" | null;
    if (storedRole && !role) dispatch(setRole(storedRole));
  }, [dispatch, role]);

  const animation = role === "investor" ? phoneAnimeGreen : phoneAnime;

  const handleLocationSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
    form.setValue("address", selectedAddress);
  };


  const navigate = useNavigate();
const success = useSelector((state: RootState) => state.postVolunterr.success);
console.log("Registration success status:", success);

useEffect(() => {
  if (success) {
    navigate('/login'); // yoki boshqa sahifa
  } else{
      toast.error("Tasdiqlash kodingiz noto‘g‘ri!")
  }
}, [success, navigate]);
console.log(localStorage.getItem('token'));

  return (
    <>
    <Toaster position="top-right" richColors />
    <div className="container mx-auto h-screen flex flex-col justify-center p-5 lg:p-20 gap-8">
      <div className="flex w-full">
        <img src={logo} alt="Logo Oltin qanot" className="w-[100px] hidden lg:block" />
      </div>

      <div className="flex items-center justify-center lg:justify-between">
        <div className="hidden lg:block">
          <Lottie animationData={animation} loop autoplay style={{ height: 500, width: 360 }} />
        </div>

        <div className="backdrop-blur-md bg-white/70 shadow w-[500px] rounded-xl p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <p className="text-center font-semibold text-[28px]">Ro’yxatdan o’tish</p>

              {(["name", "surname", "phone_number"] as const).map((fieldName) => (
                <FormField
                key={fieldName}
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>
                        {fieldName === "name"
                          ? "Ism"
                          : fieldName === "surname"
                          ? "Familiya"
                          : "Telefon raqam"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Kiriting" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
              ))}

              <div className="flex gap-3">
                {(["password", "confirm_password"] as const).map((fieldName) => (
                  <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName}
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                        <FormLabel>
                          {fieldName === "password"
                            ? "Parol"
                            : "Parolni tasdiqlang"}
                        </FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="*******" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                  ))}
              </div>

              <div className="flex gap-3">
                <FormField
                  control={form.control}
                  name="date_of_birth"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Tug‘ilgan sana</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Manzil</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Manzilingizni kiriting"
                            {...field}
                            value={typeof field.value === "string" ? field.value : ""} 
                            className="border border-[#808080CC] py-2.5 px-4 rounded-[6px]"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            className="border border-[#808080CC] "
                              // onClick={() => setOpenMapModal(true)}
                          >
                            <LuLocateFixed color="#808080CC"/>

                          </Button>
                          <Input {...field} />
                          <Dialog>
                            <DialogTrigger className="p-2 border rounded">
                              <FaLocationCrosshairs />
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  <LuLocateFixed /> Manzilni tanlang
                                </DialogTitle>
                                <DialogDescription>
                                  Xarita orqali kerakli manzilni tanlang va "Saqlash" tugmasini bosing.
                                </DialogDescription>
                              </DialogHeader>
                              <LeafletMap onSelect={handleLocationSelect} />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />
              </div>

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jins</FormLabel>
                    <FormControl>
                      <div className="flex gap-5">
                        {[
                          { label: "Erkak", value: "M" },
                          { label: "Ayol", value: "F" },
                        ].map(({ label, value }) => (
                          <label key={value} className="flex items-center gap-2">
                            <input
                              type="radio"
                              value={value}
                              checked={field.value === value}
                              onChange={() => field.onChange(value)}
                              className="accent-[#6495ED]"
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <Button type="submit" className="w-full py-4 text-lg font-semibold bg-[#6495ED]">
                Ro'yxatdan o'tish
              </Button>

              <p className="text-center text-sm">
                Akkountingiz bormi?{" "}
                <a href="/login" className="text-blue-600 underline">
                  Kirish
                </a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
};
