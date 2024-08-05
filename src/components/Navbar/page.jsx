"use client"
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import home from "../../assets/home.svg";
import email from "../../assets/email.svg";
import message from "../../assets/message.svg";
import send from "../../assets/send.svg";
import menu from "../../assets/menu.svg";
import inbox from "../../assets/inbox.svg";
import bar from "../../assets/bar.svg";
import logo from "../../assets/logo.svg";

const Page = () => {
  const router = useRouter();
  const navigateToInbox = () => {
    router.push("/inbox");
  };
  const navigateToHome = () => {
    router.push("/google-login");
  };

  return (
    <div className="flex flex-col w-[3.5rem] h-screen border-r-[1px] border-[#343A40] bg-[#101113] items-center justify-center">
      <div className="flex w-[3rem] h-[4.375rem] pt-2 p-3">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="flex w-12 h-[40rem] py-4 px-2 gap-6 items-center">
        <div className="flex flex-col w-7 h-[34rem] gap-8">
          <Image src={home} alt="Home" onClick={navigateToHome} />
          <Image src={email} alt="Email" />
          <Image src={message} alt="Message" />
          <Image src={send} alt="Send" />
          <Image src={menu} alt="Menu" />
          <Image src={inbox} alt="Inbox" onClick={navigateToInbox} />
          <Image src={bar} alt="Bar" />
        </div>
      </div>
      <div className="flex w-12 h-14 px-2 py-3 items-center justify-center">
        <div className="w-8 h-8 flex">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
              fill="#054F31"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Page;
