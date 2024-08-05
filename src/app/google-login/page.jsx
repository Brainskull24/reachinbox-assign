"use client";
import React from "react";
import Navbar from "../../components/Navbar/page";
import HeaderIn from "../../components/HeaderIn/page";
import HomePage from "../../components/HomePage/page";
const page = () => {
  return (
    <div className="flex w-full">
      <div className="w-fit">
        <Navbar />
      </div>
      <div className="flex flex-col w-full">
        <HeaderIn />
        <HomePage />
      </div>
    </div>
  );
};

export default page;
