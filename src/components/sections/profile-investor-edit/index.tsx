import { LeafletMap } from "@/components/ui-elements/google-map";
import ImageUploadSection from "@/components/ui-elements/upload-image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { TbEdit } from "react-icons/tb";

const ProfileInvestorEdit: React.FC = () => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleLocationSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
    setOpen(false);
  };
  return (
    <div className="px-2 sm:px-20 py-10 w-full">
      <div className="flex items-center justify-between ">
        <Button className="bg-transparent hover:bg-[#6494ed20] border border-[#6495ED]">
          <IoIosArrowBack color="#6495ED" />
        </Button>
        <p className="text-[18px] sm:text-[30px] font-semibold leading-[0.5px] tracking-[0.5px] text-[#2F2E2E]">
          Investor profilini to’ldirish
        </p>
        <span></span>
      </div>

      <div className="flex flex-col items-center justify-center py-14 px-3">
        <div className="">
          <div className="">
            <Avatar className="w-60 sm:w-80 h-60 sm:h-80 mx-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <Dialog>
              <div className="flex items-center justify-center translate-y-[-30px]">
                <DialogTrigger className="bg-[#6495ED] w-14 h-14 grid place-content-center rounded-full">
                  <TbEdit size={30} color="white" />
                </DialogTrigger>
              </div>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rasmingizni o'zgartirish</DialogTitle>
                  <DialogDescription>
                    <Input type="file" />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <form className=" px-6 w-[310px] sm:w-[530px]">
            <p className="text-[#2F508C] text-[16px] font-semibold">
              Kompaniya yoki Investor Nomi
            </p>
            <Input className="border border-[#6495ED] focus:outline-none  rounded-[6px] py-3 px-5 mb-7" />
            <p className="text-[#2F508C] text-[16px] font-semibold">
              Tashkilot rahbari F.I.SH
            </p>
            <Input className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-7" />
            <p className="text-[#2F508C] text-[16px] font-semibold">
              Telefon raqami
            </p>
            <Input className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-4" />
            <p className="text-[#2F508C] text-[16px] font-semibold">
              Tashkilot INN
            </p>
            <Input className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-4" />
            <div className="flex items-center gap-2 mb-4">
              <Input
                placeholder="Toshkent shahri"
                className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <Dialog>
                <DialogTrigger className="border border-[#6495ED] focus:outline-none rounded-[6px] p-2">
                  <FaLocationCrosshairs color="#6495ED" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-[#2F508C] text-[16px] font-semibold">
                      Manzilni tanlang
                    </DialogTitle>
                  </DialogHeader>
                  <LeafletMap onSelect={handleLocationSelect} />
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-[#2F508C] text-[16px] font-smibold">
              Elektron pochta
            </p>
            <Input
              placeholder="johndo123@gmail.com"
              className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-7"
            />
            <p className="text-[#2F508C] text-[16px] font-semibold">
              Tashkilot sayt havolasi (agar mavjud bo’lsa)
            </p>
            <Input
              placeholder="johndo123@gmail.com"
              className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-7"
            />
            <ImageUploadSection/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInvestorEdit;
