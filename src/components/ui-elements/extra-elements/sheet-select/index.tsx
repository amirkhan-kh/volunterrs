import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router";

export const SelectSheet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white hover:bg-white text-[#2F2E2E] flex items-center justify-between"
      >
        <span>Biz haqimizda</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MdOutlineKeyboardArrowDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className=""
          >
            <div className="flex flex-col w-full">
              <button
                className="bg-transparent hover:bg-transparent w-[100%] text-left shadow-[0px_2px_4px_rgba(99,99,99,0.2)] my-0.5 p-2 rounded-[6px]"
              >
                <NavLink
                  to="/volontyorlik-nima"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
                >
                  Volontyorlik nima
                </NavLink>
              </button>

              <button
                className="bg-transparent hover:bg-transparent w-[100%] text-left shadow-[0px_2px_4px_rgba(99,99,99,0.2)] my-0.5 p-2 rounded-[6px]"
              >
                <NavLink
                  to="/tariximiz"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
                >
                  Tariximiz
                </NavLink>
              </button>

              <button
                className="bg-transparent hover:bg-transparent w-[100%] text-left shadow-[0px_2px_4px_rgba(99,99,99,0.2)] my-0.5 p-2 rounded-[6px]"
              >
                <NavLink
                  to="/jamoamiz"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
                >
                  Jamoamiz
                </NavLink>
              </button>

              <button
                className="bg-transparent hover:bg-transparent w-[100%] text-left border shadow-[0px_2px_4px_rgba(99,99,99,0.2)] my-0.5 p-2 rounded-[6px]"
              >
                <NavLink
                  to="/rasmlar"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
                >
                  Rasmlar
                </NavLink>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};




const SelectSheet2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white hover:bg-white text-[#2F2E2E] flex items-center justify-between"
      >
        <span>Volantyor</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MdOutlineKeyboardArrowDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className=""
          >
            <div className="flex flex-col w-full">
             

             

              <button
                className="bg-transparent hover:bg-transparent w-[100%] text-left shadow-[0px_2px_4px_rgba(99,99,99,0.2)] my-0.5 p-2 rounded-[6px]"
              >
                <NavLink
                  to="/volunterrs-page"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
                >
                  Volantyorlik
                </NavLink>
              </button>

              <button
                className="bg-transparent hover:bg-transparent w-[100%] text-left border shadow-[0px_2px_4px_rgba(99,99,99,0.2)] my-0.5 p-2 rounded-[6px]"
              >
                <NavLink
                  to="/investor-page"
                  className={({ isActive }) =>
                    isActive ? "text-indigo-400" : "text-[#1C1C1C]"
                  }
                >
                  Investor
                </NavLink>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectSheet2;
