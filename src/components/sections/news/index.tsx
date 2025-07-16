import React, { useState } from "react";
import "./_style.scss";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { regions } from "@/db/org-btns";
import { newsDb } from "@/db/news";
import { PiCalendarBold } from "react-icons/pi";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

export const NewsSectionNews: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, projectId: number) => {
    e.preventDefault();
    window.location.href = `/single-page/${projectId}`;
  };

  const { pathname } = useLocation();
  const pageTitle =
    pathname === "/events-page"
      ? "Tadbirlar"
      : pathname === "/news-page"
      ? "Yangiliklar"
      : "Bo'lim";
const { t } = useTranslation("EventsPageLang");
  return (
    <div className="container mx-auto py-20 px-4 lg:p-24">
      <div className="flex justify-between gap-6 mb-12">
        <div className="relative mb-6 w-full">
          <Input
            placeholder={`${t("inputPlaceholder")}`}
            className="w-full pl-12 py-6 text-[#2F508C] font-semibold text-[18px] placeholder:text-[#2F508C] border-transparent shadow-[0px_2px_6px_rgba(99,99,99,0.2)]"
          />
          <CiSearch className="absolute top-[10px] left-4" color="#2F508C" size={32} />
        </div>

        <div>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-white hover:bg-white text-[#2F2E2E] border border-[#6495ED] py-5 text-[17px] font-medium w-70 shadow-[0px_2px_6px_rgba(99,99,99,0.2)] mt-2 flex items-center justify-between"
          >
            <span>{t("seeAll")}</span>
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <MdOutlineKeyboardArrowDown size={20} />
            </motion.span>
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0 }}
              >
                <div className="w-70 absolute z-50 translate-y-1">
                  {regions.map((item, i) => (
                    <Button
                      key={i}
                      onClick={() => setIsOpen(false)}
                      className="bg-white hover:bg-white text-[#2F2E2E] focus:bg-[#6495ED] focus:text-white py-5 border border-[#6495ED] text-[17px] font-medium w-70 shadow-[0px_2px_6px_rgba(99,99,99,0.2)] my-1 flex items-center justify-between"
                    >
                      {item.nameRegion}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <h3 className="mb-8 text-3xl font-semibold">{pageTitle}</h3>

      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className="overflow-x-auto no-scrollbar mb-6">
          <div className="flex gap-x-6 w-max py-1">
            {newsDb.slice(rowIndex * 5, rowIndex * 5 + 5).map((item, i) => (
              <a
                key={i}
                className="w-[345px] h-[500px] shrink-0 bg-white shadow rounded-lg p-2 relative"
                href={`/single-page/${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[330px] object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-xl mb-4 pr-20">{item.titleNews}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                <div className="flex items-center text-sm text-[#6495ED] absolute left-[215px] top-[305px] bg-white py-1 px-2 rounded-[8px]">
                  <PiCalendarBold className="mr-1" />
                  <p>{item.dataCalendar}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
