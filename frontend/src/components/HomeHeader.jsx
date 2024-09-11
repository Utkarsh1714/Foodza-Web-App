import React from "react";
import Heart from "../assets/header/heart.png";
import Search from "../assets/header/search.svg";
import HomeBanner from "./HomeBanner";

const HomeHeader = () => {
  return (
    <>
      <div className="h-auto w-full bg-[#294122] flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex w-full px-10 text-left lg:px-20">
            <h1 className="text-2xl font-bold text-[#FFEDD2]">
              FOOD<span className="text-[#b28854]">Z</span>A
            </h1>
          </div>
          <div className="h-12 w-full bg-[#294122] flex items-center justify-center gap-2 py-2">
            <input
              type="text"
              placeholder="Address"
              className="outline-none lg:w-[30%] w-[50%] max-sm:w-[80%] rounded-2xl h-full lg:px-5 px-2 bg-[#9FA795] text-black placeholder:text-black"
            />
            <button className="w-9 h-9 p-2 rounded-full bg-[#D9D9D9] flex items-center justify-center">
              <img src={Heart} alt="Like" />
            </button>
          </div>
        </div>
        <div className="px-10">
          <div className="tracking-wide lg:tracking-widest">
            <p className="text-white lg:text-normal">Good morning, Bruno ✌️</p>
            <h4 className="font-semibold text-white lg:font-xl">
              Are you ready to place your order?
            </h4>
          </div>
          <div className="bg-[#D9D9D9] flex lg:w-[30%] w-[90%] gap-2 mt-4 mb-2 items-center rounded-3xl h-10 overflow-hidden">
            <div className="flex items-center justify-center px-1">
              <img src={Search} alt="searchBtn" />
            </div>
            <input
              type="text"
              placeholder="Breakfast, Burger, Taco, Coffee, Pancake,..."
              className="bg-[#D9D9D9] outline-none w-full"
            />
          </div>
        </div>
        <div>
          <HomeBanner />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
