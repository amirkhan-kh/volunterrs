import React, { useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import phoneAnime from "../../../../public/voluntermedia/animation/Animation - 1747729307329.json";
import phoneAnimeGreen from "../../../../public/voluntermedia/animation/greenstep1.json";
import logo from "../../../../public/voluntermedia/Logo.png";
import "./_style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";
import { sendCode } from "@/store/login-slice";

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(9, { message: "Telefon raqam kamida 9 ta raqamdan iborat bo'lishi kerak." })
    .max(13, { message: "Telefon raqam maksimal 13 ta belgidan oshmasligi kerak." }),
});

export const Step1: React.FC = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.role.role);
  const dispatchApp = useAppDispatch();


 useEffect(() => {
  let storedRole = localStorage.getItem("role") as "volunterr" | "investor" | null;

  if (!storedRole) {
    storedRole = "volunterr";
    localStorage.setItem("role", storedRole); 
  }

  dispatch(setRole(storedRole));
}, [dispatch]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await dispatchApp(sendCode(values.phoneNumber));
    console.log(result);
    
    if (sendCode.fulfilled.match(result)) {
    console.log("SMS yuborildi:", result.payload);
    } else {
    console.error("Xatolik:", result.payload || result.error);
    console.log(result.payload || "SMS yuborishda xatolik yuz berdi");
  }
    
    
  };
  console.log(sendCode);

  const animationToShow = role === "investor" ? phoneAnimeGreen : phoneAnime;

  return (
    <div className="custom container mx-auto h-screen flex flex-col justify-center p-20 gap-8">
      <div className="flex w-full">
        <img src={logo} alt="Logo Oltin qanot" className="w-[100px]" />
      </div>

      <div className="flex items-center justify-between">
        <div id={role === "volunterr" ? "step1" : undefined} className="p-0">
          <Lottie
            animationData={animationToShow}
            loop
            autoplay
            style={{ height: "400px", width: "380px" }}
          />
        </div>

        <div className="backdrop-blur-md bg-[rgba(255,255,255,0.7)] shadow w-[500px] h-[260px] rounded-[12px] py-7 px-4">
          <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-center text-[#2F2E2E] font-bold text-[27px] mb-2">
                      Tizimga kirish
                    </FormLabel>
                    <FormControl>
                      <div>
                        <p
                          className={`text-sm mb-1 ${
                            role === "volunterr" ? "text-[#2F508C]" : "text-[#808080CC]"
                          }`}
                        >
                          Telefon raqamingizni kiriting
                        </p>
                        <div className="relative">
                          <span className="absolute inset-y-0 right-4 flex items-center pl-3 text-gray-500">
                            <IoCallOutline />
                          </span>
                          <Input
                            {...field}
                            placeholder="+998"
                            type="tel"
                            className="py-2 px-3.5 border border-[#A1A1A1] pr-10"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
              type="submit" 
                className={`w-full text-[18px] font-semibold py-4 ${
                  role === "volunterr"
                    ? "bg-[#6495ED] hover:bg-[#6494eded]"
                    : "bg-[#39B55D] hover:bg-[#39B55D]"
                }`}
              >
                Kirish
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
