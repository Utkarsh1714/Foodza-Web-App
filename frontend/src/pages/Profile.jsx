import React, { useEffect, useState } from "react";
import Register from "./Register";
import UserProfile from "./UserProfile";

const Profile = () => {
  const token = localStorage.getItem("token"); // Check if user is logged in
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem("user");

      // Ensure storedUser exists and is a valid JSON string before parsing
      if (storedUser && storedUser !== "undefined") {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser); // Set user data if parsing is successful
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      } else {
        console.log("No valid user data found in localStorage");
      }
    }
  }, [token]);

  return (
    <div className="w-full h-screen">
      {token && user ? (
        <div className="w-full">
          <UserProfile user={user} />
        </div>
      ) : (
        <div className="w-full">
          <Register />
        </div>
      )}
    </div>
  );
};

export default Profile;
