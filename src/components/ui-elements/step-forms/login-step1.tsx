import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import { IoCallOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import logo from "../../../../public/voluntermedia/Logo.png";
import phoneAnime from "../../../../public/voluntermedia/animation/Animation - 1747729307329.json";
import phoneAnimeGreen from "../../../../public/voluntermedia/animation/greenstep1.json";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "@/store/store-config";
import { setRole } from "@/store/role-slice";
import "./_style.scss";
import { loginVolunteer } from "@/store/login-post";
import { useNavigate } from "react-router";
import { toast, Toaster } from "sonner";

const formSchema = z.object({
  phone_number: z
    .string()
    .min(9, "Telefon raqam kamida 9 ta raqamdan iborat bo'lishi kerak")
    .max(13, "Telefon raqam maksimal 13 ta belgidan oshmasligi kerak"),
   
  password: z
    .string()
    .min(8, "Parol kamida 8 ta belgidan iborat bo'lishi kerak")
    .refine((val) => isNaN(Number(val)), {
      message: "Faqat raqamlardan iborat parol bo'lmasligi kerak",
    }),
});

type FormSchemaType = z.infer<typeof formSchema>;


const LoginStep1:  React.FC = () =>{
  const dispatch = useAppDispatch();
  const role = useSelector((state: RootState) => state.role.role);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone_number: "",
      password: "",
    },
  });

  useEffect(() => {
    let storedRole = localStorage.getItem("role") as "volunterr" | "investor" | null;
    if (!storedRole) {
      storedRole = "volunterr";
      localStorage.setItem("role", storedRole);
    }
    dispatch(setRole(storedRole));
  }, [dispatch]);

  const onSubmit = async (values: FormSchemaType) => {
    const result = await dispatch(loginVolunteer(values));
    console.log("Login request:", values);
    console.log(" Login result:", result);
    if (loginVolunteer.fulfilled.match(result)) {
      console.log("Login muvaffaqiyatli:", result.payload);
    } else {
      console.error("Login xatosi:", result.payload || result.error);
    }
  };

  const animation = role === "investor" ? phoneAnimeGreen : phoneAnime;
    const navigate = useNavigate();
const token = useSelector((state: RootState) => state.loginPost.token);
const isAuthenticated = useSelector((state: RootState) => state.loginPost.isAuthenticated);
console.log(token);
console.log(isAuthenticated);

useEffect(() => {
  if (isAuthenticated && token) {
    navigate('/');
  } else{
    // navigate('/register');
     toast.error("Bu foydalanuvchi tizimdan ro'yxatdan o'tgan")
  }
}, [isAuthenticated, token, navigate]);

  return (
    <>
     <Toaster position="top-center" />
    <div className="container mx-auto h-screen flex flex-col justify-center p-5 md:p-20 gap-2 lg:gap-8">
      <div className="flex w-full">
        <img src={logo} alt="Logo Oltin qanot" className="w-[100px] block sm:hidden lg:block" />
      </div>

      <div className="flex items-center justify-center lg:justify-between">
        <div className="hidden lg:block">
          <Lottie animationData={animation} loop autoplay style={{ height: "400px", width: "380px" }} />
        </div>

        <div className="backdrop-blur-md bg-[rgba(255,255,255,0.7)] shadow w-[500px] rounded-xl p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormLabel className="block text-center text-[#2F2E2E] font-bold text-[27px] mb-4">
                Tizimga kirish
              </FormLabel>

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon raqam</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                          <IoCallOutline />
                        </span>
                        <Input {...field} placeholder="998901234567" className="pr-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parol</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                          <FaLock />
                        </span>
                        <Input {...field} type="password" placeholder="*******" className="pr-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <Button type="submit" className="w-full text-[18px] font-semibold py-4 bg-[#6495ED] hover:bg-[#6494eded]">
                Kirish
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginStep1;
