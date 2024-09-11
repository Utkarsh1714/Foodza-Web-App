import React from "react";
import Navbar from "../components/Navbar";

const Shop = () => {
  return (
    <>
      <div className="w-full h-screen mx-auto">
        <div className="flex items-center justify-center w-full h-full">
          Shop
        </div>
        <div className="sticky bottom-0">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Shop;
