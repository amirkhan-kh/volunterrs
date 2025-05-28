import { Button } from "@/components/ui/button";
import React from "react";
import "./bottom.css";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BtnNavBottom: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Button
      className="block bg-transparent hover:bg-transparent overflow-hidden h-8 w-8 mt-[-6px] lg:hidden"
      onClick={toggleOpen}
    >
      <div className={`bg-transparent relative w-[20px] h-[14px]`}>
        <div className={`nav-icon2 ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Button>
  );
};

export default BtnNavBottom;
