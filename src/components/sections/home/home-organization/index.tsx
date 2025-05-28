import React from "react";
import org2 from "../../../../../public/voluntermedia/icons/homeIcon/org2.png";
import org1 from "../../../../../public/voluntermedia/icons/homeIcon/org1.png";
import "./_style.scss";
import { bankApps, priceBtn } from "@/db/org-btns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
const HomeOrganization: React.FC = () => {
  return (
    <div className="">
      <div className="bg-white py-14">
        <div className="container mx-auto px-3 lg:px-[100px]">
          <div className="hidden sm:flex gap-8 w-full">
            <div className="w-[50%]">
              <h3 className="text-3xl font-semibold  mb-4">
                Volontyor va tashkilot
              </h3>
              <div className=" overflow-hidden h-[490px] rounded-[12px] mb-4">
                <img
                  src={org1}
                  alt=""
                  className=" w-full h-full object-cover transition-transform duration-[800ms] ease-in-out hover:scale-105 "
                />
              </div>
            </div>

            <div className="w-[50%] ">
              <div className=" overflow-hidden h-[460px] rounded-[12px] mb-2">
                <img
                  src={org2}
                  alt=""
                  className=" w-full h-full object-cover transition-transform duration-[800ms] ease-in-out hover:scale-105 "
                />
              </div>
              <h3 className="text-[18px] font-medium leading-7">
                Dunyoni ezgulik tomonlarini izlayotgan Volontyorlar va xayirli
                ishlarni qilmoqchi bo'lgan barcha tashkilotlar birlashgan
                yaxshilik maydoniga hush kelibsiz!
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 lg:px-[100px]">
        <div className="flex flex-col gap-7 py-[120px] ">
          <div className="flex items-center gap-3 overflow-x-auto scroll-smooth no-scrollbar">
            {priceBtn.map((item, i) => (
              <Button
                key={i}
                className="border-[#6495ED] border w-[175px] bg-transparent hover:bg-transparent text-[#2F508C] py-8  gap-2"
              >
                <p className="text-3xl font-semibold">{item.price}</p>
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-2  sm:flex items-center gap-3 sm:gap-3 overflow-x-auto scroll-smooth no-scrollbar">
            {bankApps.map((item, i) => (
              <div
                key={i}
                className="border-[#EAEAEA] border  rounded-[12px] gap-2 lg:gap-6 p-2.5 sm:w-64 flex items-center justify-between"
              >
                <img src={item.img} alt="Bank Apps Img" className="w-16 sm:w-20 lg:w-36 h-10 sm:h-12 lg:h-14" />
                <RadioGroup>
                  <RadioGroupItem
                    value=""
                    id=""
                    className="border border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white w-5 h-5 "
                  />
                </RadioGroup>
              </div>
            ))}
          </div>
          <Button className=" bg-[#6495ED] hover:bg-[#6494edea] w-full rounded-[12px] h-12 text-2xl font-medium">
            Pul o’tkazish
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomeOrganization;
