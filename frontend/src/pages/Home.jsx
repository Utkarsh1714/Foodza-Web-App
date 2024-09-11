import React from "react";
import HomeHeader from "../components/HomeHeader";
import FoodGallary from "../components/FoodGallary";
import Navbar from "../components/Navbar";
import FooterImg from "../assets/foodGallary/banner.svg";

const Home = () => {
  return (
    <div className="w-full h-screen scroll-auto">
      <div>
        <HomeHeader />
      </div>
      <div>
        <FoodGallary />
        <div>
          <img src={FooterImg} alt="" />
        </div>
      </div>
      <div className="sticky bottom-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
