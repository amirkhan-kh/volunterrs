import React from 'react'
import { NavLink } from 'react-router-dom'
import NavDropdaownAbout, { NavDropdaownVolunterrs } from '../nav-dropdawn'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useTranslation } from 'react-i18next';

export const BottomNavbar: React.FC = () => {
    const { t } = useTranslation("Header");
  
  return (
      <ul className="flex items-center justify-center gap-3 ">
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
            <NavDropdaownAbout /> <MdOutlineKeyboardArrowDown />
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
            <NavDropdaownVolunterrs /> <MdOutlineKeyboardArrowDown />
          </li>
        </NavLink>
      </ul>
  );
};
