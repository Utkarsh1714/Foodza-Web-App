import React from "react";
import Banner from "../assets/header/offer.svg";

const HomeBanner = () => {
  return (
    <>
      <div className="w-full h-[10%] bg-no-repeat bg-contain p-0 md:hidden lg:hidden xl:hidden min-sm:visible">
        <img src={Banner} alt="Home Banner" />
      </div>
    </>
  );
};

export default HomeBanner;
