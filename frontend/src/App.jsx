import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop";
import Pesanan from "./pages/Pesanan";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-detail" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
