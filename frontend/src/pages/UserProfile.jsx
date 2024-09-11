import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear token and user data from localstorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // redirect to login page
    navigate("/login");
  };

  // set a default profile avatar if the user didn't upload
  const profilePicture = user.profilePicture
    ? `${window.location.origin}/${user.profilePicture}`
    : "https://via.placeholder.com/150";

  return (
    <>
      <div className="w-full h-screen">
        <div className="absolute right-0 flex pt-4 pr-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-black"
          >
            Logout
          </button>
        </div>
        <div className="flex items-center w-full h-full px-4 justify-evenly">
          <div>
            <h1 className="text-2xl font-bold">Hey, {user.name}</h1>
            <p className="text-xl font-semibold">Welcom to Foodza</p>
            <p className="text-medium">
              Registered email,
              <br /> {user.email}
            </p>
          </div>
          <div className="overflow-hidden rounded-full w-14 h-14">
            <img
              src={profilePicture}
              alt=""
              className="object-cover w-14 h-14"
            />
          </div>
        </div>
        <div className="absolute bottom-0 stick">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
