import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { investor } from "@/db/team";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiEqualizer3Fill } from "react-icons/ri";

const InvestorSection: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-4 lg:p-24 ">
      <h3 className="text-3xl font-semibold mb-14">
        Investorlar
      </h3>
      <div>
        <div className="flex items-center gap-6 mb-14">
          <div className="relative mb-6 w-full">
            <Input
              placeholder="Search"
              className="w-full px-20 py-6 text-[#2F508C] font-semibold text-[18px] placeholder:text-[#2F508C] border-transparent shadow-[0px_2px_6px_rgba(99,99,99,0.2)]"
            />
            <CiSearch
              className="absolute top-[10px] left-4 "
              color="#2F508C"
              size={32}
            />
          </div>
          <Button
            className="bg-white hover:bg-white py-6 translate-y-[-10px]"
          >
            <RiEqualizer3Fill color="black" className="rotate-90"/>

          </Button>
        </div>
        {[0, 1, 2, 3].map((rowIndex) => (
          <div key={rowIndex} className="overflow-x-auto no-scrollbar mb-6 ">
            <div className="flex  gap-x-6 w-max  py-1">
              {investor.slice(rowIndex * 5, rowIndex * 5 + 5).map((item, i) => (
                <div
                  key={i}
                  className="w-[345px] h-[400px] shrink-0 bg-white shadow rounded-lg p-2 relative"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[330px] object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-4  text-center">
                    {item.inName}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorSection;
