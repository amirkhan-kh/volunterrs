import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import homeLogo from "../../../../public/images/logo 1.png";
import "./sheet-nav.css";
import { NavLink } from "react-router";
import SelectSheet2, { SelectSheet } from "../extra-elements/sheet-select";
import { FaRegUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";



export const SheetNavigation = () => {
  const [showlang, setShowlang] = useState(false);
  console.log(showlang);

  const { t } = useTranslation("Header");
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowlang(false);
  };
  const token = localStorage.getItem("token");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="burger"></button>
      </SheetTrigger>
      <SheetContent side="left" className="">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-5 justify-center my-10">
            <img src={homeLogo} alt="bosh logo" className="" />
            <div className="">
              <h1 className="text-[20px] font-bold text-[#6495ED]">
                OLTIN QANOT
              </h1>
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="flex-col items-center  justify-between inline-block">
              <div className="flex border border-[#6495ED] rounded-[6px]  px-1 py-1 gap-4 mb-4">
                <button
                  onClick={() => changeLanguage("uz")}
                  className="bg-[#6495ED33] hover:bg-[#fbfdff] focus:bg-[#6495ED] text-[#2F2E2E] focus:text-white hover:cursor-pointer py-1 px-2 rounded-[6px] ">
                  UZB
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="bg-[#6495ED33] hover:bg-[#fbfdff] focus:bg-[#6495ED] text-[#2F2E2E] focus:text-white hover:cursor-pointer py-1 px-2 rounded-[6px] ">
                  RUS
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className="bg-[#6495ED33] hover:bg-[#fbfdff] focus:bg-[#6495ED] text-[#2F2E2E] focus:text-white hover:cursor-pointer py-1 px-2 rounded-[6px] ">
                  USA
                </button>
              </div>

            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="w-full px-4">
          <ul className="flex flex-col justify-center gap-3 lg:hidden">
            <NavLink
              to="/home-page"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              <li className="text-[15px] font-semibold leading-[24px]">
                {t("nav1")}
              </li>
            </NavLink>

            <li className="flex items-center gap-1 text-[15px] font-semibold leading-[24px]">
              <NavLink to="/" className="flex items-center gap-1">
                <SelectSheet />
              </NavLink>
            </li>

            <NavLink
              to="/events-page"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              <li className="text-[15px] font-semibold leading-[24px] ">
                {t("nav3")}
              </li>
            </NavLink>

            <NavLink
              to="/news-page"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              <li className="text-[15px] font-semibold leading-[24px] ">
                {t("nav4")}
              </li>
            </NavLink>

            <NavLink
              to="/volunterrs-page"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "text-[#1C1C1C]"
              }
            >
              <li className="flex items-center gap-1 text-[15px] font-semibold leading-[24px] ">
                <SelectSheet2 />

              </li>
            </NavLink>
          </ul>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex items-center justify-between w-full gap-4">
              {token ? (
                // Token mavjud bo‘lsa — profilga havola va avatar
                <a href="/profile-volunter" >
                  <FaRegUserCircle size={24} color="#6495ED" />

                </a>
              ) : (
                // Token mavjud bo‘lmasa — Ro‘yxatdan o‘tish tugmasi
                <Button
                  variant="outline"
                  className="border border-[#6495ED]"
                >
                  <NavLink to="/register">{t("btn1")}</NavLink>
                </Button>
              )}
              <Button
                className="w-[40%]  bg-[#6495ED] text-white hover:bg-[#7ea8f5]">
                <NavLink to="/donation-page">{t("btn2")}</NavLink>
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
