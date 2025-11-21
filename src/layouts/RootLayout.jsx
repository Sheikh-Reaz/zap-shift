import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="bg-[#EAECED]">
      <div className="max-w-7xl mx-auto ">
        <div className="md:pt-5">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
