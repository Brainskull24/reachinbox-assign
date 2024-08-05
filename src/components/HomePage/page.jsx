import Image from "next/image";
import React from "react";
import nomessage from "../../assets/nomessage.svg";
const page = () => {
  return (
    <div className="flex w-full h-full bg-[#000000] items-center justify-center">
      <div className="flex flex-col w-[832.3px] h-[392.4px] gap-12 items-center justify-between">
          <Image src={nomessage} />
        <div className="flex flex-col w-[533px] items-center h-[115px] gap-[24px] text-[#FFFFFF]">
          <h1 className="w-full h-[37px] font-sans font-bold text-2xl">
            It's the beginning of a legendary sales pipeline
          </h1>
          <p className="flex items-center text-center text-lg w-[289px] h-[54px] text-[#9E9E9E]">
            When you have inbound E-mails you'll see them here
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
