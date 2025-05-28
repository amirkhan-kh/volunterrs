import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OTPInput } from "../otp-input";
import { Button } from "@/components/ui/button";
import phoneSendCode from '../../../../public/voluntermedia/animation/code.json'
import phoneSendCodeGreen from '../../../../public/voluntermedia/animation/greenstep2.json'
import logo from '../../../../public/voluntermedia/Logo.png'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";



const formSchema2 = z.object({
  phoneCode: z.string().min(6, {
    message: "Tasdiqlash kodi kamida 6 raqamdan iborat bo‘lishi kerak.",
  }),
});
const Step2: React.FC = () => {
  const [otp, setOtp] = useState("");
    

  const role = useSelector((state: RootState) => state.role.role);
    const dispatch = useDispatch();
  
    useEffect(() => {
        const storedRole = localStorage.getItem("role") as
          | "volunterr"
          | "investor"
          | null;
        if (storedRole && !role) {
          dispatch(setRole(storedRole));
        }
      }, [dispatch, role]);
  const form2 = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    defaultValues: {
      phoneCode: "",
    },
  });
  function onSubmit2(values: z.infer<typeof formSchema2>) {
    console.log(values);
  }


  useEffect(() => {
    form2.setValue("phoneCode", otp);
  })

  const generateAnime = role === "investor" ? phoneSendCodeGreen : phoneSendCode
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center p-20">
      <div className="flex w-full ">
        <img src={logo} alt="Logo Oltin qanot" className="w-[100px]" />
        <span></span>
      </div>
      <div className="flex items-center justify-between ">
        <div className=" p-0">
          <Lottie
            animationData={generateAnime}
            loop
            autoplay
            style={{ height: "400px", width: "360px" }}
          />
        </div>

        <div className="backdrop-blur-md bg-[rgba(255,255,255,0.7)] shadow w-[500px] h-[320px] rounded-[12px] py-7 px-4">
          <Form {...form2}>
            <form
              onSubmit={form2.handleSubmit(onSubmit2)}
              className="space-y-6"
            >
              <FormField
                control={form2.control}
                name="phoneCode"
                render={() => (
                  <FormItem>
                    <FormLabel className="block text-center text-[#2F2E2E] font-bold text-[24px] mb-2">
                      Tasdiqlash raqamini kiriting
                    </FormLabel>
                    <FormControl>
                      <>
                        <p className="text-[15px]  mb-1 text-[#808080CC] block text-center">
                          +998 ** *** ** ** raqamiga sms <br />
                          shaklida yuborilgan parolni kiriting
                        </p>
                        <OTPInput length={6} onChange={(val) => setOtp(val)} />
                      </>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <p className="leading-0 font-medium text-[15px] text-[#808080CC] ">
                  kodni qayta shuborish vaqti:{" "}
                </p>{" "}
                <span>kodni qayta jo'natish</span>
              </div>
              <Button
                type="submit"
                className={`w-full text-[18px] font-semibold py-4 
                 ${role === "volunterr" ? "bg-[#6495ED] hover:bg-[#6494eded]" : "bg-[#39B55D] hover:bg-[#39B55D]"}`}
              >
                Tasdiqlash
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
