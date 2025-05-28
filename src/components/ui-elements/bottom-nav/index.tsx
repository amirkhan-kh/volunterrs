import React from 'react'
import { NavLink } from 'react-router-dom'
import NavDropdaownAbout, { NavDropdaownVolunterrs } from '../nav-dropdawn'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export const BottomNavbar: React.FC = () => {
  return (
      <ul className="flex items-center justify-center gap-3 ">
        <NavLink
          to="/home-page"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "text-[#1C1C1C]"
          }
        >
          <li className="text-[15px] font-semibold leading-[24px]">
            Bosh Sahifa
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
            Tadbirlar
          </li>
        </NavLink>

        <NavLink
          to="/news-page"
          className={({ isActive }) =>
            isActive ? "text-indigo-400" : "text-[#1C1C1C]"
          }
        >
          <li className="text-[15px] font-semibold leading-[24px] ">
            Yangiliklar
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
