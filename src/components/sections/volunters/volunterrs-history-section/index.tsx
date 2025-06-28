import React, { useState } from "react";

import ac1 from "../../../../../public/voluntermedia/icons/history/book-saved.svg";
import ac2 from "../../../../../public/voluntermedia/icons/history/note.svg";
import ac3 from "../../../../../public/voluntermedia/icons/history/cup.svg";
import ac4 from "../../../../../public/voluntermedia/icons/history/frame.svg";
import ac5 from "../../../../../public/voluntermedia/icons/history/heart.svg";
import { MdOutlineKeyboardArrowDown, MdOutlineDone } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
const VolunterHistorySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const {t} = useTranslation("AboutHistoryLang");
  return (
    <div className="container mx-auto py-20 p-4 lg:p-24">
      <h2 className="text-[#2F2E2E] text-2xl font-bold mb-8">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-6">
        <div className="">
          <div className={`rounded-[6px] flex items-center py-4 px-3 sm:px-10 justify-between cursor-pointer  shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-colors duration-300  
            ${isOpen ? "bg-[#6495ED]" : "bg-white"}`}onClick={() => setIsOpen((prev) => !prev)}>
            <div className="flex items-center gap-6">
              <div
               className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-full bg-white p-3">
                 <MdOutlineDone className="text-[#B4B4B4]"/>

               </div>
              <h4
                className={`text-2xl font-semibold ${
                  isOpen ? "text-white" : "text-[#2F2E2E]"
                }`}
              >
                {t("select1")}
              </h4>
            </div>
            <p
              className={`hidden sm:flex items-center gap-3.5 text-[14px] font-semibold ${
                isOpen ? "text-white" : "text-[#2F2E2E]"
              }`}
            >
              2016.y 7 october
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowDown size={20} />
              </motion.span>
            </p>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-[6px] bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] py-6 px-10 -translate-y-1">
                  <p>
                    {t("text1")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


         <div className="">
          <div className={`rounded-[6px] flex items-center py-4 px-3 sm:px-10 justify-between  cursor-pointer  shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-colors duration-300  ${isOpen1 ? "bg-[#6495ED]" : "bg-white"}`}onClick={() => setIsOpen1((prev) => !prev)}>
            <div className="flex items-center gap-4">
              <img src={ac1} alt="" 
              className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-full bg-white p-2"/>
              <h4
                className={`text-2xl font-semibold ${
                  isOpen1 ? "text-white" : "text-[#2F2E2E]"
                }`}
              >
                {t("select2")}
              </h4>
            </div>
            <p
              className={`hidden sm:flex items-center gap-3.5 text-[14px] font-semibold ${
                isOpen1 ? "text-white" : "text-[#2F2E2E]"
              }`}
            >
              2016.y 7 october
              <motion.span
                animate={{ rotate: isOpen1 ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowDown size={20} />
              </motion.span>
            </p>
          </div>
          <AnimatePresence>
            {isOpen1 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-[6px] bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] py-6 px-10 -translate-y-2">
                  <p>
                    {t("text2")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


         <div className="">
          <div className={`rounded-[6px] flex items-center py-4 px-3 sm:px-10 justify-between cursor-pointer  shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-colors duration-300  ${isOpen2 ? "bg-[#6495ED]" : "bg-white"}`}onClick={() => setIsOpen2((prev) => !prev)}>
            <div className="flex items-center gap-6">
              <img src={ac2} alt="" 
              className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-full bg-white p-2"
              />
              <h4
                className={`text-2xl font-semibold ${
                  isOpen2 ? "text-white" : "text-[#2F2E2E]"
                }`}
              >
                {t("select3")}
              </h4>
            </div>
            <p
              className={`hidden sm:flex items-center gap-3.5 text-[14px] font-semibold ${
                isOpen2 ? "text-white" : "text-[#2F2E2E]"
              }`}
            >
              2016.y 7 october
              <motion.span
                animate={{ rotate: isOpen2 ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowDown size={20} />
              </motion.span>
            </p>
          </div>
          <AnimatePresence>
            {isOpen2 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-[6px] bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] py-6 px-10 -translate-y-2">
                  <p>
                    {t("text3")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


         <div className="">
          <div className={`rounded-[6px] flex items-center py-4 px-3 sm:px-10 justify-between cursor-pointer  shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-colors duration-300  ${isOpen3 ? "bg-[#6495ED]" : "bg-white"}`}onClick={() => setIsOpen3((prev) => !prev)}>
            <div className="flex items-center gap-6">
              <img src={ac3} alt="" 
                 className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-full bg-white p-2"
              />
              <h4
                className={`text-2xl font-semibold ${
                  isOpen3 ? "text-white" : "text-[#2F2E2E]"
                }`}
              >
                {t("select4")}
              </h4>
            </div>
            <p
              className={`hidden sm:flex items-center gap-3.5 text-[14px] font-semibold ${
                isOpen3 ? "text-white" : "text-[#2F2E2E]"
              }`}
            >
              2016.y 7 october
              <motion.span
                animate={{ rotate: isOpen3 ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowDown size={20} />
              </motion.span>
            </p>
          </div>
          <AnimatePresence>
            {isOpen3 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-[6px] bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] py-6 px-10 -translate-y-2">
                  <p className="w-[250px]">
                    {t("text4")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


         <div className="">
          <div className={`rounded-[6px] flex items-center py-4 px-3 sm:px-10 justify-between cursor-pointer  shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-colors duration-300  ${isOpen4 ? "bg-[#6495ED]" : "bg-white"}`}onClick={() => setIsOpen4((prev) => !prev)}>
            <div className="flex items-center gap-6">
              <img src={ac4} alt="" 
               className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-full bg-white p-2"
              />
              <h4
                className={`text-2xl font-semibold ${
                  isOpen4 ? "text-white" : "text-[#2F2E2E]"
                }`}
              >
                {t("select5")}
              </h4>
            </div>
            <p
              className={`hidden sm:flex items-center gap-3.5 text-[14px] font-semibold ${
                isOpen4 ? "text-white" : "text-[#2F2E2E]"
              }`}
            >
              2016.y 7 october
              <motion.span
                animate={{ rotate: isOpen4 ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowDown size={20} />
              </motion.span>
            </p>
          </div>
          <AnimatePresence>
            {isOpen4 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-[6px] bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] py-6 px-10 -translate-y-2">
                  <p>
                    {t("text5")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


         <div className="">
          <div className={`rounded-[6px] flex items-center py-4 px-3 sm:px-10 justify-between cursor-pointer  shadow-[0px_2px_8px_rgba(99,99,99,0.2)] transition-colors duration-300  ${isOpen5 ? "bg-[#6495ED]" : "bg-white"}`}onClick={() => setIsOpen5((prev) => !prev)}>
            <div className="flex items-center gap-6">
              <img src={ac5} alt="" 
               className="shadow-[0px_2px_8px_rgba(99,99,99,0.2)] rounded-full bg-white p-2"
              />
              <h4
                className={`text-2xl font-semibold ${
                  isOpen5 ? "text-white" : "text-[#2F2E2E]"
                }`}
              >
                {t("select6")}
              </h4>
            </div>
            <p
              className={`hidden sm:flex items-center gap-3.5 text-[14px] font-semibold ${
                isOpen5 ? "text-white" : "text-[#2F2E2E]"
              }`}
            >
              2016.y 7 october
              <motion.span
                animate={{ rotate: isOpen5 ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowDown size={20} />
              </motion.span>
            </p>
          </div>
          <AnimatePresence>
            {isOpen5 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="rounded-[6px] bg-white shadow-[0px_2px_8px_rgba(99,99,99,0.2)] py-6 px-10 -translate-y-2">
                  <p>
                    {t("text6")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default VolunterHistorySection;
