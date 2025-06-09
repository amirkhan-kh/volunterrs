import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import footerface from "../../../public/voluntermedia/icons/homeIcon/footerface.png";
import footerinst from "../../../public/voluntermedia/icons/homeIcon/footerinst.png";
import footertube from "../../../public/voluntermedia/icons/homeIcon/footertube.png";
import footertme from "../../../public/voluntermedia/icons/homeIcon/footertme.png";
import silver1 from "../../../public/voluntermedia/icons/homeIcon/silverface.png";
import silver2 from "../../../public/voluntermedia/icons/homeIcon/silvertube.png";
import silver3 from "../../../public/voluntermedia/icons/homeIcon/silverinst.png";
import silver4 from "../../../public/voluntermedia/icons/homeIcon/silvertme.png";
import footerlogo from "../../../public/voluntermedia/footerlogo.png";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import "./_style.scss";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="bg-[#0e1e3c] pt-[10px] pb-12 px-4 lg:px-[100px] text-white ">
        <div className="w-full bg-[#6495ED] h-24 md:h-16 translate-y-[-40px] rounded-[8px] flex flex-col  md:flex-row items-center justify-between py-4 px-3 md:px-8">
          <h3 className=" text-center md:text-left md:text-3xl font-semibold tracking-wide">
            O’z hissangizni qo’shmoqchimisiz ?
          </h3>
          <Button className="bg-white hover:bg-[#ffffffe8] text-[#6495ED] cursor-pointer w-32 px-3">
            Biz bilan bog’laning
          </Button>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center sm:justify-between">
          <div className="flex flex-col items-center ">
            <img src={footerlogo} alt="" className=""/>
            <p className="flex items-center ">
              <MdCopyright size={8} />
              <p className="text-[8px]">since {currentYear}</p>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto md:m-0 text-center sm:text-left">
            <ul className="w-full sm:w-[130px] text-center sm:text-left">
              <p className="font-bold text-2xl border-b border-[#0D2C63] hover:border-[#303f59]  leading-[163%] mb-6">
                Linklar
              </p>
              <NavLink to="/home-page">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  Bosh sahifa
                </li>
              </NavLink>
              <NavLink to="/about-page">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  Biz haqimizda
                </li>
              </NavLink>
              <NavLink to="#">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  Loyihalar
                </li>
              </NavLink>
              <NavLink to="#">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  Yangiliklar
                </li>
              </NavLink>
              <NavLink to="#">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  Aloqa
                </li>
              </NavLink>
            </ul>
            <ul className="hidden sm:block w-[130px] text-center sm:text-left">
              <p className="font-bold text-2xl border-b border-[#0D2C63] hover:border-[#303f59] leading-[163%] mb-6">
                Medialar
              </p>
              <li className="flex items-center gap-2.5 leading-[169%]">
                <img src={footerface} alt="" className="w-5" />
                <a href="#">Facebook</a>
              </li>
              <li className="flex items-center gap-2.5 leading-[169%]">
                <img src={footertube} alt="" className="w-5" />
                <a href="#">You tube</a>
              </li>
              <li className="flex items-center gap-2.5 leading-[169%]">
                <img src={footerinst} alt="" className="w-5" />
                <a href="#">Instagram</a>
              </li>
              <li className="flex items-center gap-2.5 leading-[169%]">
                <img src={footertme} alt="" className="w-5" />
                <a href="#">Telegram</a>
              </li>
            </ul>
            <ul className="text-center sm:text-left">
              <p className="font-bold text-2xl border-b border-[#0D2C63] hover:border-[#303f59] leading-[163%] mb-6">
                Aloqa
              </p>
              <li className="flex items-center gap-2 text-[16px] mb-5">
                <HiOutlineMapPin size={22} />
                <a href="#">volunteersuzb@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-[16px] mb-5">
                <IoMailOutline size={22} />
                <a href="#">volunteersuzb@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-[16px] mb-5">
                <IoCallOutline size={22} />
                <a href="#">+998 94 924-01-15</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#07142D] px-[100px] flex items-center justify-center sm:block py-5">
        <div className="flex items-center justify-between">
          <p className="text-[#A3A3A3] hidden sm:flex items-center text-[12px] tracking-wide">
            <MdCopyright /> Oltin Qanot. Website <span> {currentYear}</span>
          </p>
          <ul className="flex items-center gap-6">
            <a href="#">
              <img src={silver1} alt="" />
            </a>
            <a href="#">
              <img src={silver2} alt="" />
            </a>
            <a href="#">
              <img src={silver3} alt="" />
            </a>
            <a href="#">
              <img src={silver4} alt="" />
            </a>
          </ul>
          <p className=" hidden sm:text-white text-[16px] font-semibold">Topilov Asadbek</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
