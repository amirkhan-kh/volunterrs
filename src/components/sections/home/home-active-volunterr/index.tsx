import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import active1 from "../../../../../public/images/activ1.png";
import active2 from '../../../../../public/images/activ2.png';
import active3 from '../../../../../public/images/activ3.png';
import active4 from '../../../../../public/images/activ4.png';
import active5 from '../../../../../public/images/activ5.png';
import active6 from '../../../../../public/images/activ6.png'
import active7 from '../../../../../public/voluntermedia/icons/homeIcon/activ6.png'
import active8 from '../../../../../public/voluntermedia/icons/homeIcon/activ7.png'
import active9 from '../../../../../public/images/activ9.png';
import active10 from '../../../../../public/images/activ10.png'
import "./_style.scss";
const HomeActiveVolunterr: React.FC = () => {
    const location = useLocation();

  return (
    <div id="home-active" className="bg-white">
      <div className="container mx-auto px-3 py-10 lg:px-[100px]">
        <div className="flex items-center justify-between mb-8 ">
          <h2 className="text-[22px] sm:text-3xl font-semibold leading-8 ">
            {location.pathname.replace(/\/$/, "") === "/rasmlar"
            ? "Volontyor va tashkilot"
            : "Faol Volontyorlar"}
          </h2>
          <NavLink to="/volunterrs-page">
            <li className="list-none text-[18px] font-semibold leading-[24px] text-[#6495ED] flex items-center">
              <span>hammasi</span>
              <MdKeyboardArrowRight size={24} />
            </li>
          </NavLink>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full">
            <div className="w-[60%]">
              <img src={active1} alt="" className="translate-y-[6px] sm:translate-y-[0px] rounded-2xl sm:w-[400px] md:w-[100%]"/>
              <div className="flex">
                <img src={active4} alt="" className=" h-[500px] md:h-[440px]  rounded-3xl w-[600px]  lg:h-[420px] xl:h-[390px] lg:w-[650px] xl:w-[470px] "/>
                <img src={active5} alt="" className="ms-[-10px]  w-[265px] xl:w-[380px] h-[390px] hidden sm:block  md:hidden lg:hidden xl:block " />
              </div>
            </div>
            <div className="w-[40%] ">
                <img src={active7} alt="" className="h-full object-cover  rounded-3xl md:hidden"/>

                <img src={active8} alt="" className="hidden sm:w-full h-[170px] object-cover rounded-[6px] translate-y-1 md:hidden"/>
              <div className="hidden md:flex w-[50%]">
                <img src={active2} alt="" className="hidden md:block" />
                <img src={active3} alt="" className="hidden md:block" />
              </div>
              <img src={active6} alt="" className="hidden md:block h-[585px] "/>
            </div>
          </div>
          {/* 2 */}
          <img src={active8} alt="" className="block sm:hidden"/>
          <div className="hidden sm:flex w-full  md:gap-4 h-[700px]">
            <img src={active7} alt="" className="h-[700px] xl:h-[770px] xl:w-[36%]"/>
            <div className="ms-2 md:w-[63%]  translate-y-[9px] ">
              <img src={active8} alt="" className="object-contain rounded-md mb-2"/>
              <div className="translate-y-[-5px] md:flex   md:h-[440px]   ms-[-7px] md:ms-0">
                <img src={active7} alt="" className="h-[550px] w-full block md:hidden"/>
                <img src={active9} alt="" className=" h-[450px] hidden md:block w-[100%] object-cover rounded-[26px]   lg:w-[50%]"/>
                <img src={active10} alt="" className="hidden lg:block w-[53%]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeActiveVolunterr;
