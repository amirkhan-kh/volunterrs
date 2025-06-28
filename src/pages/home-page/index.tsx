import { Button } from "@/components/ui/button";
import React from "react";
import { MdDone } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { useTranslation } from "react-i18next";
const Home: React.FC = () => {
const {t} = useTranslation("AboutPageLang");
  return (
    <>
      <div className="container mx-auto py-14 px-4 lg:p-24">
        <div>
          <h3 className="font-semibold text-3xl text-[#2F2E2E] mb-7">
            {t("title")}
          </h3>
          <p className="text-2xl font-normal mb-9 leading-10">
            {t("subtitle1")}
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            {t("subtitle2")}
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            {t("subtitle3")}
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            {t("subtitle4")}
          </p>
          <p className="text-2xl font-normal mb-9 leading-10">
            {t("subtitle5")}
          </p>
        </div>
      </div>
      <div className="px-4 sm:grid place-content-center py-20 bg-white">
        <p className="flex items-center gap-8 mb-3 text-[18px] font-normal  leading-10">
          <span className="border border-[#6495ED] p-1 rounded-sm">
            <MdDone color="#6495ED"/>
          </span>
          {t("subtitle6")}
        </p>
        <Button
        
          className="bg-[#6495ED] hover:bg-[#6495ED]  w-full text-[20px] py-4">
          <CiBookmarkCheck size={34}/>
          {t("btn")}
        </Button>
      </div>
    </>
  );
};

export default Home;
