import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsDb } from "@/db/news";
import React from "react";
import { useParams } from "react-router";
import { RiTelegram2Line } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";

const SinglePage: React.FC = () => {
  const { id } = useParams();

  const project = newsDb.find((item) => item.id === Number(id));

  if (!project) {
    return <h2>Project topilmadi!</h2>;
  }
  return (
    <div className="py-20 px-4 lg:p-20 container mx-auto ">
      <img
        src={project.img}
        alt={project.titleNews}
        className="w-full object-cover h-[540px] rounded-2xl mb-8"
      />
      <span className="text-[#6495ED] text-[16px] font-bold block md:hidden">12 May 2023 / 22 May 2023 </span>

      <h3 className="text-3xl font-semibold mb-4">{project.titleNews}</h3>
      <p className="mb-10 text-[16px] font-medium">{project.desc}</p>

      <div className="flex items-center justify-between mb-14">
        <div className="flex items-center justify-between gap-3 sm:gap-9 ">
          <Button className="bg-white hover:bg-white text-[#2F508C] py-3 px-4 flex items-center gap-9">
            <span className="hidden sm:block">
              Ulashish
            </span>
            <GoShareAndroid />

          </Button>
          <Button className="bg-white hover:bg-white text-[#2F508C] py-3 px-4 flex items-center gap-9">
            <span className="hidden sm:block">
             Manzil 
            </span>
            <p className="block sm:hidden text-[15px] sm:text-2xl font-medium">Toshken shahri Sergili </p>
            <LuMapPin />

          </Button>


          <p className="hidden sm:block text-2xl font-medium">Toshken shahri Sergili </p>
        </div>
        <span className="text-[#6495ED] text-[16px] font-bold hidden md:block">12 May 2023 / 22 May 2023 </span>
      </div>

      <div className="flex items-center justify-between gap-6">
        <Input placeholder="commend"/>
        <Button className="bg-[#6495ED] hover:bg-[#6494ede0] rounded-[6px] p-3">
        <RiTelegram2Line />

        </Button>
      </div>
    </div>
  );
};

export default SinglePage;
