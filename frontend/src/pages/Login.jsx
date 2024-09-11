import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, login to get the token
      const loginResponse = await fetch(`${window.location.origin}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok && loginData.token) {
        // Save the token to localStorage
        localStorage.setItem("token", loginData.token);

        // Now, fetch user details using the token
        const userResponse = await fetch(
          `${window.location.origin}/api/profile`,
          {
            method: "GET",
            headers: {
              "x-auth-token": loginData.token,
            },
          }
        );

        const userData = await userResponse.json();

        if (userResponse.ok && userData) {
          // Save user data to localStorage
          localStorage.setItem("user", JSON.stringify(userData));

          // Redirect to profile after login and fetching user details
          navigate("/profile");
        } else {
          setError("Failed to fetch user details");
        }
      } else {
        setError(loginData.msg || "Login failed");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full ">
        <div className="p-10">
          <h1 className="text-2xl font-bold">Already have an account</h1>
          <h4 className="text-2xl font-semibold">Login here 😊</h4>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <form onSubmit={handleSubmit} className="py-20">
            <div className="py-2">
              <label className="text-xl">Email : </label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                className="py-1 placeholder:text-center"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-xl">Password : </label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="py-1 placeholder:text-center"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p>{error}</p>}
            <div className="flex items-center justify-center w-full py-6">
              <button
                type="submit"
                className="px-4 py-2 border border-[#294122] bg-[#294122] rounded-full text-white text-xl"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center">
            <Link to="/register">
              <h4>
                Dont't have an account{" "}
                <span className="text-blue-500">register here</span>
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Login;
