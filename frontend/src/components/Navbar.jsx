import React from "react";
import HomeIcon from "../assets/navbar-img/home.svg";
import WishlistIcon from "../assets/navbar-img/wishlist.svg";
import ShopIcon from "../assets/navbar-img/shop.png";
import PesananIcon from "../assets/navbar-img/chat.svg";
import SayaIcon from "../assets/navbar-img/profile.svg";
import { Link } from "react-router-dom";

const Navbar = ({ setActiveComponent }) => {
  return (
    <div className="h-20 w-screen flex items-center justify-center bg-[#B78C56] cursor-pointer">
      <div className="flex items-center justify-center w-auto h-full px-1 space-x-10 lg:space-x-52 max-sm:space-x-8">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="flex flex-col items-center justify-center">
            <img src={HomeIcon} alt="Home" />
            <p className="font-mono text-xs font-medium lg:text-xl">Home</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/wishlist"
            className="flex flex-col items-center justify-center"
          >
            <img src={WishlistIcon} alt="Wishlist" />
            <p className="font-mono text-xs font-medium lg:text-xl">Wishlist</p>
          </Link>
        </div>
        <div className="flex items-center justify-center w-20 h-full -translate-y-10 bg-white rounded-full shadow-xl">
          <Link
            to="/shop"
            className="flex flex-col items-center justify-center"
          >
            <img src={ShopIcon} alt="Shop" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/pesanan"
            className="flex flex-col items-center justify-center"
          >
            <img src={PesananIcon} alt="Pesanan" />
            <p className="font-mono text-xs font-medium lg:text-xl">Pesanan</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/profile"
            className="flex flex-col items-center justify-center"
          >
            <img src={SayaIcon} alt="Profile" />
            <p className="font-mono text-xs font-medium lg:text-xl">Saya</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
