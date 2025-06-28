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
import { useTranslation } from "react-i18next";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("FooterLang")
  return (
    <footer className="footer">
      <div className="bg-[#0e1e3c] pt-[10px] pb-12 px-4 lg:px-[100px] text-white ">
        <div className="w-full bg-[#6495ED] h-24 md:h-16 translate-y-[-40px] rounded-[8px] flex flex-col  md:flex-row items-center justify-between py-4 px-3 md:px-8">
          <h3 className=" text-center md:text-left md:text-3xl font-semibold tracking-wide">
            {t("titleAbs")}
          </h3>
          <Button className="bg-white hover:bg-[#ffffffe8] text-[#6495ED] cursor-pointer w-32 px-3">
            {t("titleBtn")}
          </Button>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center sm:justify-between">
          <div className="flex flex-col items-center ">
            <img src={footerlogo} alt="" className="" />
            <p className="flex items-center ">
              <MdCopyright size={8} />
              <p className="text-[8px]">since {currentYear}</p>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto md:m-0 text-center sm:text-left">
            <ul className="w-full sm:w-[130px] text-center sm:text-left">
              <p className="font-bold text-2xl border-b border-[#0D2C63] hover:border-[#303f59]  leading-[163%] mb-6">
                {t("ul1")}
              </p>
              <NavLink to="/home-page">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  {t("link1")}
                </li>
              </NavLink>
              <NavLink to="/about-page">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  {t("link2")}
                </li>
              </NavLink>
              <NavLink to="/events-page">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  {t("link3")}
                </li>
              </NavLink>
              <NavLink to="/news-page">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  {t("link4")}
                </li>
              </NavLink>
              <NavLink to="#">
                <li className="text-[14px] font-medium leading-[193%] tracking-wider">
                  {t("link5")}

                </li>
              </NavLink>
            </ul>
            <ul className="hidden sm:block w-[130px] text-center sm:text-left">
              <p className="font-bold text-2xl border-b border-[#0D2C63] hover:border-[#303f59] leading-[163%] mb-6">
                {t("link6")}

              </p>
              <ul>
                <li className="flex items-center gap-2.5 leading-[169%]">
                  <img src={footerface} alt="Facebook icon" className="w-5" />
                  <a
                    href="https://www.facebook.com/volunteers.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook sahifamizga o'tish"
                    title="Facebook"
                  >
                    Facebook
                  </a>
                </li>

                <li className="flex items-center gap-2.5 leading-[169%]">
                  <img src={footertube} alt="YouTube icon" className="w-5" />
                  <a
                    href="https://www.youtube.com/channel/UCX8BWTwT49B4VnuwVq8HE2g"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube kanalimizga o'tish"
                    title="YouTube"
                  >
                    YouTube
                  </a>
                </li>

                <li className="flex items-center gap-2.5 leading-[169%]">
                  <img src={footerinst} alt="Instagram icon" className="w-5" />
                  <a
                    href="https://www.instagram.com/volunteers_uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profilimizga o'tish"
                    title="Instagram"
                  >
                    Instagram
                  </a>
                </li>

                <li className="flex items-center gap-2.5 leading-[169%]">
                  <img src={footertme} alt="Telegram icon" className="w-5" />
                  <a
                    href="https://t.me/Volunteers_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram kanalimizga o'tish"
                    title="Telegram"
                  >
                    Telegram
                  </a>
                </li>
              </ul>

            </ul>
            <ul className="text-center sm:text-left">
              <p className="font-bold text-2xl border-b border-[#0D2C63] hover:border-[#303f59] leading-[163%] mb-6">
                {t("link5")}
              </p>
              <li className="flex items-center gap-2 text-[16px] mb-5">
                <HiOutlineMapPin size={22} />
                <a href="mailto:volunteersuzb@gmail.com?subject=Volunteer Inquiry&body=Salom, men ko‘ngilli bo‘lishni istayman.">volunteersuzb@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-[16px] mb-5">
                <IoMailOutline size={22} />
                <a href="mailto:volunteersuzb@gmail.com?subject=Volunteer Inquiry&body=Salom, men ko‘ngilli bo‘lishni istayman.">volunteersuzb@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-[16px] mb-5">
                <IoCallOutline size={22} />
                <a href="tel:+998949240115">+998 94 924-01-15</a>

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
            <li>
              <a
                href="https://www.facebook.com/volunteers.uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook sahifamizga o'ting"
                title="Facebook"
                className="flex flex-col items-center"
              >
                <img src={silver1} alt="Facebook icon" />
                <span className="text-sm text-gray-600 mt-1">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCX8BWTwT49B4VnuwVq8HE2g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube kanalimizga o'ting"
                title="YouTube"
                className="flex flex-col items-center"
              >
                <img src={silver2} alt="YouTube icon" />
                <span className="text-sm text-gray-600 mt-1">YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/volunteers_uz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profilimizga o'ting"
                title="Instagram"
                className="flex flex-col items-center"
              >
                <img src={silver3} alt="Instagram icon" />
                <span className="text-sm text-gray-600 mt-1">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Volunteers_uz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram kanalimizga o'ting"
                title="Telegram"
                className="flex flex-col items-center"
              >
                <img src={silver4} alt="Telegram icon" />
                <span className="text-sm text-gray-600 mt-1">Telegram</span>
              </a>
            </li>
          </ul>

          <p className=" hidden sm:text-white text-[16px] font-semibold">Topilov Asadbek</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
