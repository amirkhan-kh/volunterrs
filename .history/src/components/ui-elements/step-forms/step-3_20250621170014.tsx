import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import logo from "../../../../public/voluntermedia/Logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl,  FormField,  FormItem, FormLabel, FormMessage, Form} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import phoneAnime from "../../../../public/voluntermedia/animation/Animation - 1747684791916.json";
import phoneAnimeGreen from '../../../../public/voluntermedia/animation/greenstep3.json'
import { z } from "zod";
import { LuLocateFixed } from "react-icons/lu";
import './_style.scss'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";

export type FormData = z.infer<typeof formSchema3>;
const formSchema3 = z.object({
  firstName: z
    .string()
    .min(2, { message: "Ism kamida 2 ta harfdan iborat bo‘lishi kerak" }),
  surname: z
    .string()
    .min(2, { message: "Familiya kamida 2 ta harfdan iborat bo‘lishi kerak" }),
  password: z
    .string()
    .min(6, { message: "Parol kamida 6 belgidan iborat bo‘lishi kerak" }),
  birthday: z.string().min(1, { message: "Tug‘ilgan sanani tanlang" }),
  address: z.string().min(1, { message: "Manzil bo‘sh bo‘lishi mumkin emas" }),
  gender: z.enum(["male", "female"], { required_error: "Jinsni tanlang" }),
  agree: z.boolean().refine((val) => val === true, {
    message: "Foydalanuvchi shartlariga rozilik kerak",
  }),
});
export const Step3: React.FC = () => {
  const role = useSelector((state: RootState) => state.role.role);
  const dispatch = useDispatch();
  const form3 = useForm<z.infer<typeof formSchema3>>({
    resolver: zodResolver(formSchema3),
    defaultValues: {
      firstName: "",
      surname: "",
      password: "",
      birthday: "",
      address: "",
      gender: undefined,
      agree: true,
    },
  });
  function onSubmit3(values: z.infer<typeof formSchema3>) {
    console.log(values);
  }


  useEffect(() => {
      const storedRole = localStorage.getItem("role") as
        | "volunterr"
        | "investor"
        | null;
      if (storedRole && !role) {
        dispatch(setRole(storedRole));
      }
    }, [dispatch, role]);

  const ganerateAnime = role === "investor" ? phoneAnimeGreen : phoneAnime
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center p-20 gap-8">
      <div className="flex w-full">
        <img src={logo} alt="Logo Oltin qanot" className="w-[100px]" />
        <span></span>
      </div>
      <div className="flex items-center justify-between translate-y-[-40px]">
        <div id="step3" className="p-0">
          <Lottie
            animationData={ganerateAnime}
            loop
            autoplay
            style={{ height: "500px", width: "360px" }}
          />
        </div>
        <div className="backdrop-blur-md bg-[rgba(255,255,255,0.7)] shadow w-[500px] rounded-[12px] py-7 px-4">
          <Form {...form3}>
            <form
              onSubmit={form3.handleSubmit(onSubmit3)}
              className="space-y-4"
            >
              <p className="text-center font-semibold text-[28px]">Ro’yxatdan o’tish</p>
              {/* Ism */}
              <FormField<FormData>
                control={form3.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2F508C] font-semibold text-[14px] leading-1">
                      Ismingizni kiriting
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Kiriting"
                        {...field}
                        value={typeof field.value === "string" ? field.value : ""} 
                        className="border border-[#808080CC] py-2.5 px-4 rounded-[6px] mb-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Familiya */}
              <FormField<FormData>
                control={form3.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2F508C] font-semibold text-[14px] leading-1">
                      Familiyangiz kiriting
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Kiriting"
                        {...field}
                        value={typeof field.value === "string" ? field.value : ""} 
                        className="border border-[#808080CC] py-2.5 px-4 rounded-[6px] mb-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Parol */}
              <FormField<FormData>
                control={form3.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2F508C] font-semibold text-[14px] leading-1">
                      Parol kiriting
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Kiriting"
                        {...field}
                        value={typeof field.value === "string" ? field.value : ""} 
                        className="border border-[#808080CC] py-2.5 px-4 rounded-[6px] mb-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Tug‘ilgan sana */}
              <div className="flex items-center gap-7 w-full mb-5">
                <FormField<FormData>
                  control={form3.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem className="w-[50%]">
                      <FormLabel className="text-[#2F508C] font-semibold text-[14px] leading-1">
                        Tug‘ilgan sanangizni kiriting
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          value={typeof field.value === "string" ? field.value : ""} 
                          className="border border-[#808080CC] py-2.5 px-4 rounded-[6px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Manzil */}
                <FormField<FormData>
                  control={form3.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-[50%]">
                      <FormLabel className="text-[#2F508C] font-semibold text-[14px] leading-1">
                        Manzilingizni kiriting
                      </FormLabel>
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
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Jins */}
              <FormField<FormData>
                control={form3.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#2F508C] font-semibold text-[14px]">
                      Jinsingizni tanlang
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="male"
                            checked={field.value === "male"}
                            onChange={() => field.onChange("male")}
                            className="accent-[#6495ED]"
                          />
                          <span className="text-[#2F508C] font-semibold text-[13px]">
                            Erkak
                          </span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="female"
                            checked={field.value === "female"}
                            onChange={() => field.onChange("female")}
                            className="accent-[#6495ED]"
                          />
                          <span className="text-[#2F508C] font-semibold text-[13px]">
                            Ayol
                          </span>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Foydalanuvchi shartlariga rozilik */}
              <FormField<FormData>
                control={form3.control}
                name="agree"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="agree"
                        checked={!!field.value}
                        onChange={field.onChange}
                      />
                      <label htmlFor="agree" className="text-sm">
                        Foydalanuvchi shartlariga roziman
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit button */}
              <Button
                type="submit"
                className="w-full text-[18px] font-semibold py-4 bg-[#6495ED] hover:bg-[#6494eded]"
              >
                Ro'yxatdan o'tish
              </Button>
              {/* Pastdagi log in link */}
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
  );
};
