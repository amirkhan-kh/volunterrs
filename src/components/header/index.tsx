import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import homeLogo from "../../../public/images/logo 1.png";
import { CiSearch } from "react-icons/ci";
import { VscGlobe } from "react-icons/vsc";
// import { RiUserLine } from "react-icons/ri";
import { Button } from "../ui/button";
import NavDropdaownAbout, {
  NavDropdaownVolunterrs,
} from "@/components/ui-elements/nav-dropdawn";
import { SheetNavigation } from "../ui-elements/sheet-navigation";
import { BottomNavbar } from "../ui-elements/bottom-nav";
import BtnNavBottom from "../ui-elements/bottom-nav-btn";
import { AnimatePresence, motion } from "framer-motion";
import "./_style.scss";

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showlang, setShowlang] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getTitleFromPath = (path: string) => {
    switch (path) {
      case "/about-page":
        return "BIZ HAQIMIZDA";
      case "/home-page":
        return "BOSH SAHIFA";
      case "/events-page":
        return "TADBIRLAR";
      case "/news-page":
        return "YANGILIKLAR";
      case "/volunterrs-page":
        return "KO‘NGILLILAR";

      default:
        return "OLTIN QANOT";
    }
  };

  return (
    <>
      <header className="z-50 relative">
        <div className="container mx-auto px-2 md:px-3  lg:px-10  py-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-14 lg:space-x-6  ">
              <div className="block md:hidden">
                <SheetNavigation />
              </div>
              <img src={homeLogo} alt="bosh logo" className="hidden md:block" />
              <div className="lg:block ">
                <h1 className="text-[20px] font-bold text-[#6495ED] md:hidden">
                  {getTitleFromPath(location.pathname)}
                </h1>

                <h1 className="text-[20px] font-bold text-[#6495ED] hidden md:block">
                  OLTIN QANOT
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-8">
              {!showSearch && !showlang && (
                <ul className="hidden lg:flex items-center gap-6">
                  <NavLink
                    to="/home-page"
                    className={({ isActive }) =>
                      isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                    }
                  >
                    <li className="text-[15px] font-semibold leading-[24px] w-24">
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
              )}
              {showSearch && !showlang && (
                <div className="flex items-center gap-1 border border-[#6495ED] rounded-md py-[2px] px-1 pl-3 transition-all duration-300 w-[300px] lg:w-[600px]">
                  <input
                    type="text"
                    placeholder="Izlash..."
                    className="w-full outline-none text-[12px]"
                  />
                  <Button
                    onClick={() => setShowSearch(false)}
                    className="w-[30px] h-[30px] p-0 bg-white border border-[#6495ED] hover:bg-[#ffffffcf] text-[10px] rounded-md"
                  >
                    <IoIosClose color="#6495ED" />
                  </Button>
                  <Button className="h-[30px] bg-[#6495ED] text-white hover:bg-[#6494edcf] text-[10px] rounded-md">
                    Qidirish
                  </Button>
                </div>
              )}

              {!showSearch && !showlang && (
                <Button
                  className="bg-transparent p-0 hover:bg-transparent"
                  onClick={() => setShowSearch(true)}
                >
                  <CiSearch className="text-black font-bold w-[24px] h-[24px]" />
                </Button>
              )}
              <div className="flex items-center gap-2">
                {showlang && (
                  <div className="flex border border-[#6495ED] rounded-[6px]  px-4 py-1 gap-4">
                    <button className="bg-[#fbfdff] hover:bg-[#fbfdff] text-[#2F2E2E] hover:cursor-pointer ">
                      UZB
                    </button>
                    <button className="bg-[#fbfdff] hover:bg-[#fbfdff] text-[#2F2E2E] hover:cursor-pointer ">
                      RUS
                    </button>
                    <button className="bg-[#fbfdff] hover:bg-[#fbfdff] text-[#2F2E2E] hover:cursor-pointer ">
                      USA
                    </button>
                    <button
                      onClick={() => setShowlang((prev) => !prev)}
                      className=" md:bg-[#fbfdff] hover:bg-[#fbfdff] text-[#2F2E2E] hover:cursor-pointer border-l border-[#6495ED] pl-2"
                    >
                      {" "}
                      <VscGlobe size={18} color="#6495ED" />
                    </button>
                  </div>
                )}
                {!showlang && (
                  <Button
                    variant="outline"
                    className="border border-[#6495ED] "
                    onClick={() => setShowlang((prev) => !prev)}
                  >
                    {/* lang */}
                    <VscGlobe color="#6495ED" />
                  </Button>
                )}
                <Button
                  variant="outline"
                  className=" hidden md:border border-[#6495ED] text-[#6495ED] hover:text-[#6f9bed]"
                >
                  A'zo bo'lish
                </Button>
                <Button className="bg-[#6495ED] text-white hover:bg-[#7ea8f5]">
                  <NavLink to="/donation-page">

                  Hayriya
                  </NavLink>
                </Button>
                <div className="hidden md:block">
                  <BtnNavBottom isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="relative container mx-auto w-full  ">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-[rgba(255,255,255,0.7)] backdrop-blur-1xl z-50 absolute    w-full"
            >
              <BottomNavbar />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Header;
