"use client";
import React from "react";
import Navbar from "../../components/Navbar/page";
import HeaderIn from "../../components/HeaderIn/page";
import Inbox from "../../components/Inbox/page";
const page = () => {
  return (
    <div className="flex w-[100%]">
      <div className="w-fit">
        <Navbar />
      </div>
      <div className="flex flex-col w-full">
        <HeaderIn />
        <Inbox/>
      </div>
    </div>
  );
};

export default page;
