import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
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
import { useAppSelector, type AppDispatch } from "@/store/store-config";
import { updateUser } from "@/store/profile-edit";

const ProfileVolunterrEdit: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.userPut.profile);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [passportNum, setPassportNum] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState<"M" | "F" | null>(null);
  const [profilePic, setProfilePic] = useState("");
  const [facebook, setFacebook] = useState("");
  const [telegram, setTelegram] = useState("");
  const [instagram, setInstagram] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setSurname(user.surname || "");
      setEmail(user.email || "");
      setPassportNum(user.passport_num || "");
      setAddress(user.address || "");
      setGender(user.gender || null);
      setProfilePic(user.profile_pic || "");
      setFacebook(user.facebook || "");
      setTelegram(user.telegram || "");
      setInstagram(user.instagram || "");
    }
  }, [user]);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePic(url);
    }
  };

  const handleLocationSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
  };

  const handleSubmit = () => {
    dispatch(
      updateUser({
        name,
        surname,
        email,
        passport_num: passportNum,
        address,
        gender,
        profile_pic: profilePic,
        facebook,
        telegram,
        instagram,
      })
    );
  };

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "sentabr", "oktabr", "noyabr", "dekabr"
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
          className="bg-transparent hover:bg-[#6494ed20] border border-[#6495ED]"
        >
          <IoIosArrowBack color="#6495ED" />
        </Button>
        <p className="text-[18px] sm:text-[30px] font-semibold leading-[0.5px] tracking-[0.5px] text-[#2F2E2E]">
          Profilni to’liq toldirish
        </p>
        <span></span>
      </div>

      <div className="flex flex-col items-center justify-center py-14 px-3">
        <Avatar className="w-60 sm:w-80 h-60 sm:h-80 mx-auto">
          <AvatarImage src={profilePic || "https://github.com/shadcn.png"} />
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
                <Input type="file" ref={fileInputRef} onChange={handleProfilePicChange} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <form className="px-6 w-[310px] sm:w-[530px] mt-8 space-y-6">
          <div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Ism</p>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Familiya</p>
            <Input value={surname} onChange={(e) => setSurname(e.target.value)} />
          </div>

          <div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Elektron pochta</p>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Passport seriasi</p>
            <Input value={passportNum} onChange={(e) => setPassportNum(e.target.value)} />
          </div>

          <div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Yashash manzil</p>
            <div className="flex items-center gap-2">
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Toshkent shahri"
              />
              <Dialog>
                <DialogTrigger className="border border-[#6495ED] focus:outline-none rounded-[6px] p-2">
                  <FaLocationCrosshairs color="#6495ED" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-[#2F508C] text-[16px] font-bold">Manzilni tanlang</DialogTitle>
                  </DialogHeader>
                  <LeafletMap onSelect={handleLocationSelect} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <p className="text-[#2F508C] text-[16px] font-semibold">Jinsi</p>
            <Select value={gender || ""} onValueChange={(val) => setGender(val as "M" | "F")}>
              <SelectTrigger>
                <SelectValue placeholder="Jinsni tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="M">Erkak</SelectItem>
                <SelectItem value="F">Ayol</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <p className="text-[#2F508C] text-[16px] font-smibold">Ijtimoiy tarmoqlar</p>
            <Input placeholder="Telegram havola" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
            <Input placeholder="Facebook havola" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
            <Input placeholder="Instagram havola" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
          </div>

          <Button type="button" onClick={handleSubmit} className="bg-[#6495ED] hover:bg-[#6494ede9] w-full h-14 text-[20px]">
            Ma’lumotni saqlash
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileVolunterrEdit;
