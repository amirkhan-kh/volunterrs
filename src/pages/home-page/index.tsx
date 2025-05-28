import { Button } from "@/components/ui/button";
import React from "react";
import { MdDone } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";

const Home: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-14 px-4 lg:p-24">
        <div>
          <h3 className="font-semibold text-3xl text-[#2F2E2E] mb-7">
            Foydalanish Qoidalari
          </h3>
          <p className="text-2xl font-normal mb-9 leading-10">
            Oltin Qanot web sayti foydalanuvchilar tomonidan quyida keltirilgan
            saytdan foydalanish shartlari va qoidalariga rioya qilishni talab
            qiladi. Foydalauvchi saytdan foydalanish shartlari va qoidalariga
            o‘z roziligini saytga va undan keyin istalgan sahifaga kirish
            paytidan boshlab bildirgan hisoblanadi. Oltin Qanot istalgan vaqtda
            foydalanish Shartlari va qoidalarini yangi nashrini{" "}
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            Barcha huquqlar himoyalangan. Foydalanuvchi saytning istalgan
            sahifasida joylashgan, Poytaxt Bank tomonidan ro‘yxatdan o‘tkazilgan
            yoki unga tegishli bo‘lgan har qanday ma'lumotni faqat shaxsiy
            foydalanish yoki ko‘rib chiqish maqsadida nusxalash, o‘tkazish yoki
            namoyish etish huquqiga ega bo‘lib
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            Oltin Qanot web sayti foydalanuvchilar tomonidan quyida keltirilgan
            saytdan foydalanish shartlari va qoidalariga rioya qilishni talab
            qiladi. Foydalauvchi saytdan foydalanish shartlari va qoidalariga
            o‘z roziligini saytga va undan keyin istalgan sahifaga kirish
            paytidan boshlab bildirgan hisoblanadi. Oltin Qanot istalgan vaqtda
            foydalanish Shartlari va qoidalarini yangi nashrini{" "}
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            Barcha huquqlar himoyalangan. Foydalanuvchi saytning istalgan
            sahifasida joylashgan, Poytaxt Bank tomonidan ro‘yxatdan o‘tkazilgan
            yoki unga tegishli bo‘lgan har qanday ma'lumotni faqat shaxsiy
            foydalanish yoki ko‘rib chiqish maqsadida nusxalash, o‘tkazish yoki
            namoyish etish huquqiga ega bo‘lib
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            Barcha huquqlar himoyalangan. Foydalanuvchi saytning istalgan
            sahifasida joylashgan, Poytaxt Bank tomonidan ro‘yxatdan o‘tkazilgan
            yoki{" "}
          </p>
        </div>
      </div>
      <div className="px-4 sm:grid place-content-center py-20 bg-white">
        <p className="flex items-center gap-8 mb-3 text-[18px] font-normal  leading-10">
          <span className="border border-[#6495ED] p-1 rounded-sm">
            <MdDone color="#6495ED"/>
          </span>
          Men foydalanish qoidalari bilan tanishdim va o’z roziligimni beraman
        </p>
        <Button
        
          className="bg-[#6495ED] hover:bg-[#6495ED]  w-full text-[20px] py-4">
          <CiBookmarkCheck size={34}/>
          Roziman
        </Button>
      </div>
    </>
  );
};

export default Home;
