import React from "react";
import "./Opening.css";

const OpeningPage = ({ className }) => {
  return (
    <>
      <div
        className={`opening-page ${className} w-full h-screen bg-[#294122] flex flex-col justify-center items-center text-center`}
      >
        <h1 className="text-[#FFEDD2] lg:text-[100px] text-[80px] font-bold">
          FOOD<span className="text-[#b28854]">Z</span>A
        </h1>
        <h5 className="text-[#FFEDD2] lg:text-[25px] text-[30px]">
          The Food Delivery App
        </h5>
      </div>
    </>
  );
};

export default OpeningPage;
