import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { newsDb } from "@/db/news";
import unitedHands from '../../../../../public/voluntermedia/icons/homeIcon/hands.png';
import twoHands from '../../../../../public/voluntermedia/icons/homeIcon/twoHands.png';
import "./_style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "@/store/role-slice";
import type { RootState } from "@/store/store-config";
import { NewsCard } from "@/components/ui-elements/use-views/news-views";
import { useTranslation } from "react-i18next";

const HomeNews: React.FC = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.role.role);
  console.log(role);

  useEffect(() => {
    const storedRole = localStorage.getItem("role") as "volunterr" | "investor" | null;
    if (storedRole && !role) {
      dispatch(setRole(storedRole));
    }
  }, [dispatch, role]);
 const navigate = useNavigate();

const handleChange = (title: string) => {
  if (title === "Volunterlar") {
    dispatch(setRole("volunterr"));
    localStorage.setItem("role", "volunterr");
    navigate("/register");
  } else if (title === "Investor") {
    dispatch(setRole("investor"));
    localStorage.setItem("role", "investor");
    navigate("/register");
  }
};

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectId: number
  ) => {
    e.preventDefault();
    window.location.href = `/single-page/${projectId}`;
  };

  const {t} = useTranslation("HomeNewsLang");
  return (
    <div className="container mx-auto px-4 lg:px-[100px] py-12">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-semibold leading-8">{t("title")}</h2>
        <NavLink to="/news-page">
          <li className="list-none text-[18px] font-semibold leading-[24px] text-[#6495ED] flex items-center">
            <span>{t("seeAll")}</span>
            <MdKeyboardArrowRight size={24} />
          </li>
        </NavLink>
      </div>

      <div className="overflow-x-auto scroll-smooth no-scrollbar py-3 mb-24 px-1">
        <div className="flex gap-4 w-max">
          {newsDb.map((item, i) => (
            <NewsCard
              key={i}
              id={item.id}
              img={item.img}
              titleNews={item.titleNews}
              desc={item.desc}
              dataCalendar={item.dataCalendar}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-8">
          <button
            onClick={() => handleChange("Volunterlar")}
            className="group flex flex-col sm:flex-row gap-2 md:gap-16 items-center text-[19px] sm:text-2xl font-semibold text-[#2F508C] shadow-[0px_2px_8px_rgba(99,99,99,0.2)] w-full p-8 rounded-[8px]"
          >
            <img
              src={unitedHands}
              className="w-[90px] h-[90px] transition-all duration-[800ms] group-hover:scale-[1.1]"
            />
            <p className="text-center">{t("btn1")}</p>
          </button>
           <button
            onClick={() => handleChange("Investor")}
            className="group flex flex-col sm:flex-row gap-2 md:gap-16 items-center text-[19px] sm:text-2xl font-semibold text-[#2F508C] shadow-[0px_2px_8px_rgba(99,99,99,0.2)] w-full p-8 rounded-[8px]"
          >
            <img
              alt=""
              src={twoHands}
              className="w-[90px] h-[90px] transition-all duration-[800ms] group-hover:scale-[1.1]"
            />
            <p className="text-center">{t("btn2")}</p>
          </button>
      </div>
    </div>
  );
};

export default HomeNews;
