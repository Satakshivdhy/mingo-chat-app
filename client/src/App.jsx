import React from "react";
import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Chat from "./pages/Chat";
import UserDashboard from "./pages/UserDashboard"
import { Toaster } from "react-hot-toast";

const App = () => {

  const path = useLocation().pathname;
  console.log(path);

  return (
    <>
      <Toaster />
      {/* {path !== "/chat" && <SiteHeader />} */}
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default App;

