import { Button } from "@/components/ui/button";
import React, {  useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { FaLocationCrosshairs } from "react-icons/fa6";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeafletMap } from "@/components/ui-elements/google-map";
import { DatePickerForm } from "@/components/ui-elements/date-picker";

const ProfileVolunterrEdit: React.FC = () => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  console.log(open);
  



  const handleLocationSelect = (selectedAddress: string) => {
    setAddress(selectedAddress); 
    setOpen(false); 
  };

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) =>
    (1950 + i).toString()
  );



  return (
    <div className="px-2 sm:px-20 py-10 w-full">
      <div className="flex items-center justify-between ">
        <Button
        onClick={() => window.history.back()}
        className="bg-transparent hover:bg-[#6494ed20] border border-[#6495ED]">
          <IoIosArrowBack color="#6495ED" />
        </Button>
        <p className="text-[18px] sm:text-[30px] font-semibold leading-[0.5px] tracking-[0.5px] text-[#2F2E2E]">
          Profilni to’liq toldirish
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
            <p className="text-[#2F508C] text-[16px] font-semibold">Ism</p>
            <Input className="border border-[#6495ED] focus:outline-none  rounded-[6px] py-3 px-5 mb-7" />
            <p className="text-[#2F508C] text-[16px] font-semibold">Familiya</p>
            <Input className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-7" />
            <p className="text-[#2F508C] text-[16px] font-semibold">Telefon raqam</p>
            <Input className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-4" />
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[#2F2E2E] text-[14px] w-full font-normal">Bu ma’lumot boshqa foydalanuvchiga ko’rinmaydi</p>
            </div>
            <div className="py-10 flex flex-col gap-2">
              <p className="hidden sm:block font-semibold text-[#2F508C] text-[16px]">Tug’ilgan sana</p>
              <div className="hidden sm:flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-[160px] h-10 flex items-center justify-between border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5">
                    <SelectValue placeholder="Oy tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month.charAt(0).toUpperCase() + month.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[90px] h-10 flex items-center justify-between border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5">
                    <SelectValue placeholder="Kun" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem key={day} value={day}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[100px] h-10 flex items-center justify-between border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5">
                    <SelectValue placeholder="Yil" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="block sm:hidden">
                <DatePickerForm/>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[#2F2E2E] text-[14px] w-full font-normal">Bu ma’lumot boshqa foydalanuvchiga ko’rinmaydi</p>
              </div>
            </div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Elektron pochta</p>
            <Input
            placeholder="johndo123@gmail.com"
            className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-7" />
            <p className="text-[#2F508C] text-[16px] font-semibold">Ish yoki o’qish joyi</p>
            <Input
            placeholder="Korxona nomi yoki Ta’lim muassasasi"
            className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-4" />
            <div className="flex items-center gap-2 mb-3">
              <input type="checkbox" />
              <p className="text-[#2F2E2E] text-[14px] w-full font-normal">Bu ma’lumot boshqa foydalanuvchiga ko’rinmaydi</p>
            </div>

            <p className="text-[#2F508C] text-[16px] font-semibold">Passport seriasi</p>
            <Input
            placeholder="AA1234567"
            className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5 mb-7" />
            <p className="text-[#2F508C] text-[16px] font-semibold">Yashash manzil</p>
            <div className="flex items-center gap-2 mb-4">
              <Input
                placeholder="Toshkent shahri"
                className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <Dialog>
                <DialogTrigger className="border border-[#6495ED] focus:outline-none rounded-[6px] p-2">
                  <FaLocationCrosshairs color="#6495ED"/>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-[#2F508C] text-[16px] font-bold">Manzilni tanlang</DialogTitle>
                  </DialogHeader>
                  <LeafletMap onSelect={handleLocationSelect} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center gap-2 mb-10">
              <input type="checkbox" />
              <p className="text-[#2F2E2E] text-[14px] w-full font-normal">Bu ma’lumot boshqa foydalanuvchiga ko’rinmaydi</p>
            </div>
            <div className="w-64 sm:w-80 flex flex-col gap-4 mb-20">
              <p className="text-[#2F508C] text-[16px] font-smibold">Ijtimoiy tarmoqlar</p>
              <div className="flex items-center gap-2 sm:gap-4">
                <Avatar className="w-7 sm:w-10 h-7 sm:h-10">
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" />
                </Avatar>
                <Input
                  className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5"
                  placeholder="Telegram havola"
                />
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <Avatar className="w-7 sm:w-10 h-7 sm:h-10 rounded-full">
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
                </Avatar>
                <Input
                  className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5"
                  placeholder="Facebook havola"
                />
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <Avatar className="w-7 sm:w-10 h-7 sm:h-10">
                  <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" />
                </Avatar>
                <Input
                  className="border border-[#6495ED] focus:outline-none rounded-[6px] py-3 px-5"
                  placeholder="Instagram havola"
                />
              </div>
            </div>
            <Button className="bg-[#6495ED] hover:bg-[#6494ede9] w-full h-14 text-[20px]">
              Ma’lumotni saqlash
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileVolunterrEdit;
