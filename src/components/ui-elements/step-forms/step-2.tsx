import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";
import Lottie from "lottie-react";
import { OTPInput } from "../otp-input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import phoneSendCode from '../../../../public/voluntermedia/animation/code.json';
import phoneSendCodeGreen from '../../../../public/voluntermedia/animation/greenstep2.json';
import logo from '../../../../public/voluntermedia/Logo.png';
import { verifyCode } from "@/store/verify-code-slice";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  phoneCode: z.string().min(6, "Tasdiqlash kodi 6 raqamdan iborat bo'lishi kerak."),
});


interface Step2Props {
  onNext: () => void;
}
const Step2:React.FC<Step2Props> = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useAppDispatch();
  const role = useSelector((state: RootState) => state.role.role);
  const phoneNumber = useSelector((state: RootState) => state.login.data?.phone_number);

  console.log("Phone number:", phoneNumber);
  
  useEffect(() => {
    const storedRole = localStorage.getItem("role") as "volunterr" | "investor" | null;
    if (storedRole && !role) {
      dispatch(setRole(storedRole));
    }
  }, [dispatch, role]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { phoneCode: "" },
  });

  useEffect(() => {
    form.setValue("phoneCode", otp);
  }, [otp, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!phoneNumber) {
      console.error("Telefon raqam topilmadi.");
      return;
    }

    const result = await dispatch(verifyCode({ phone_number: phoneNumber, code: values.phoneCode }));
console.log(result);

    if (verifyCode.fulfilled.match(result)) {
      console.log(" Kod tasdiqlandi:", result.payload);
      onNext();
    } else {
      console.error("❌ Tasdiqlashda xatolik:", result.payload || result.error);
     
    }
  };

  const animationData = role === "investor" ? phoneSendCodeGreen : phoneSendCode;

  return (
    <div>
     <Toaster position="top-center" />
    <div className="container mx-auto h-screen flex flex-col justify-center p-5 md:p-20 gap-2 lg:gap-8">
      <div className="flex w-full">
        <img src={logo} alt="Logo Oltin Qanot" className="w-[100px]  block sm:hidden lg:block" />
      </div>

      <div className="flex items-center justify-center lg:justify-between ">
        <div className="hidden lg:block">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ height: "400px", width: "360px" }}
            />
        </div>

        <div className="backdrop-blur-md bg-[rgba(255,255,255,0.7)] shadow w-[500px] h-[320px] rounded-[12px] py-7 px-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="phoneCode"
                render={() => (
                  <FormItem>
                    <FormLabel className="block text-center text-[#2F2E2E] font-bold text-[24px] mb-2">
                      Tasdiqlash raqamini kiriting
                    </FormLabel>
                    <FormControl>
                        <div>
                        <p className="text-[15px] text-center mb-1 text-[#808080CC]">
                          +998 ** *** ** ** raqamiga yuborilgan kodni kiriting
                        </p>

                        <OTPInput length={6} onChange={setOtp} />
                        </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <div className="flex items-center justify-between text-sm text-[#808080CC]">
                <p>Kodni qayta yuborish vaqti:</p>
                <span className="text-blue-600 cursor-pointer">Kodni qayta yuborish</span>
              </div>

              <Button
                type="submit"
                className={`w-full text-[18px] font-semibold py-4 ${
                  role === "volunterr"
                  ? "bg-[#6495ED] hover:bg-[#6494eded]"
                  : "bg-[#39B55D] hover:bg-[#39B55D]"
                }`}
                >
                Tasdiqlash
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Step2;
