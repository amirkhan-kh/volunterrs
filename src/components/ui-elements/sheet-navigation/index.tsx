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
import { VscGlobe } from "react-icons/vsc";
import { NavLink } from "react-router";
import SelectSheet2, { SelectSheet } from "../extra-elements/sheet-select";
export const SheetNavigation = () => {
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
            <div className="flex items-center justify-between ">
              <div className="flex border border-[#6495ED] rounded-[6px]  px-1 py-1 gap-4">
                <button className="bg-[#6495ED33] hover:bg-[#fbfdff] focus:bg-[#6495ED] text-[#2F2E2E] focus:text-white hover:cursor-pointer py-1 px-2 rounded-[6px] ">
                  UZB
                </button>
                <button className="bg-[#6495ED33] hover:bg-[#fbfdff] focus:bg-[#6495ED] text-[#2F2E2E] focus:text-white hover:cursor-pointer py-1 px-2 rounded-[6px] ">
                  RUS
                </button>
                <button className="bg-[#6495ED33] hover:bg-[#fbfdff] focus:bg-[#6495ED] text-[#2F2E2E] focus:text-white hover:cursor-pointer py-1 px-2 rounded-[6px] ">
                  USA
                </button>
              </div>
              <Button variant="outline" className="border border-[#6495ED]">
                {/* lang */}
                <VscGlobe color="#6495ED" />
              </Button>
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
                Bosh Sahifa
              </li>
            </NavLink>

            <li className="flex items-center gap-1 text-[15px] font-semibold leading-[24px]">
              <NavLink to="/" className="flex items-center gap-1">
                <SelectSheet/>
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
                <SelectSheet2/>

              </li>
            </NavLink>
          </ul>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex items-center justify-between w-full gap-4">
            <Button
              variant="outline"
              className="w-[40%] border border-[#6495ED] text-[#6495ED] hover:text-[#6f9bed]"
            >
              A'zo bo'lish
            </Button>
            <Button
              className="w-[40%]  bg-[#6495ED] text-white hover:bg-[#7ea8f5]">
              Hayriya
            </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
