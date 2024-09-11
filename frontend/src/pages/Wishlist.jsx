import React from "react";
import Navbar from "../components/Navbar";

const Wishlist = () => {
  return (
    <>
      <div className="w-full h-screen mx-auto">
        <div className="flex items-center justify-center w-full h-full">
          Wishlist
        </div>
        <div className="sticky bottom-0 ">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Wishlist;
