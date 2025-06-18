import React from "react";
import { NavLink } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiCalendarBold } from "react-icons/pi";
import { newsDb } from "@/db/news";
import { statisticCard } from "@/db/statistic";
import "./_style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "@/store/role-slice";
import type { RootState } from "@/store/store-config";
console.log(setRole);

const HomeNews: React.FC = () => {
  const dispatch = useDispatch();
   const role = useSelector((state: RootState) => state.role.role);
  console.log(role);

  const handleChange = (title: string) => {
    if (title === "Volunterlar") dispatch(setRole("volunterr"));
    else if (title === "Investor") dispatch(setRole("investor"));
  };
  

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, projectId: number) => {
    e.preventDefault();
    window.location.href = `/single-page/${projectId}`;
  };
  return (
    <div className="container mx-auto px-4 lg:px-[100px] py-12">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-semibold leading-8">Yangiliklar</h2>
        <NavLink to="/news-page">
          <li className="list-none text-[18px] font-semibold leading-[24px] text-[#6495ED] flex items-center">
            <span>hammasi</span>
            <MdKeyboardArrowRight size={24} />
          </li>
        </NavLink>
      </div>

      <div className="overflow-x-auto scroll-smooth no-scrollbar py-3 mb-24 px-1">
        <div className="flex gap-4 w-max">
          {newsDb.map((item, i) => (
            <a
              key={i}
              href={`/single-page/${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className="w-[] sm:w-[345px]  bg-white shadow rounded-lg p-2 relative"
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
             
             <div className="mb-3">
               <h3 className="font-semibold text-2xl mb-2">{item.titleNews}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
             </div>
              <div className="flex items-center  text-sm absolute top-[178px] left-[190px] w-36 bg-white py-1 px-5 rounded-sm text-[#6495ED] text-[14px]">
                <PiCalendarBold className="mr-1" />
                <p>{item.dataCalendar}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        {statisticCard.slice(1, 3).map((item, i) => (
          <button key={i}

            onClick={() => handleChange(item.title)}
            className="group flex flex-col sm:flex-row gap-2 md:gap-16 items-center text-[19px] sm:text-2xl font-semibold text-[#2F508C] shadow-[0px_2px_8px_rgba(99,99,99,0.2)] w-full p-8 rounded-[8px]"
          >
            <img src={item.img} alt="" 
              className="w-[90px] h-[90px] transition-all duration-[800ms] group-hover:scale-[1.1]"
            />
            <p className="text-center">{item.title} bo'lish</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeNews;
