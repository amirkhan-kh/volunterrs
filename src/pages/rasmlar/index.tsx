import { Intro } from "@/components/main-sections";
import { HomeActiveVolunterr, HomeContact } from "@/components/sections/home";
import React from "react";
const VolunterrsImages: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <Intro />
      <div className="py-24">
        <HomeActiveVolunterr />
        <HomeContact/>
      </div>
    </div>
  );
};

export default VolunterrsImages;
