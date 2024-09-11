import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);

    try {
      const response = await fetch(`${window.location.origin}/api/register`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok !");
      }

      const data = await response.json();
      console.log("User register successfully", data);

      navigate("/login");
    } catch (error) {
      console.log("Error registering user:", error);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col w-full h-full px-10 text-center justify-evenly">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-wider">Hey, User</h1>
          <p className="pt-2 text-xl font-medium">Not register yer ?</p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="flex items-center justify-center gap-6 py-2">
              <label className="text-xl">Username: </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="px-1 border border-[#294122] rounded hover:border-[#B78C56] placeholder:text-center"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center gap-6 py-2">
              <label className="text-xl">Email: </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="px-1 border border-[#294122] rounded hover:border-[#B78C56] placeholder:text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center gap-6 py-2">
              <label className="text-xl">Password: </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="px-1 border border-[#294122] rounded hover:border-[#B78C56] placeholder:text-center"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <label className="text-xl">Profile: </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-auto"
              />
            </div>
            <button
              type="submit"
              className="p-2 mt-4 text-white bg-blue-500 rounded"
            >
              Register
            </button>
          </form>
          <div className="py-2">
            <p>
              Already have an account?{" "}
              <span className="text-blue-500">
                <Link to="/login">Click here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Register;
