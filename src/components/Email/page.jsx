import Image from "next/image";
import React from "react";
import campaign from "../../assets/campaign.svg"
const Email = ({ fromEmail, subject }) => {
  return (
    <div className="flex items-start p-3 px-2 gap-2 w-[255px] border-b-[1px] border-[#343A40] cursor-pointer">
      <div className="flex flex-col w-[247px] h-[76px] rounded-[8px] p-1 gap-2">
        <div className="flex flex-col w-full h-[40px] gap-[2px] justify-between">
          <div className="flex w-full h-1/2 text-[14px] font-sans items-center">
            <p className="text-white w-[200px] h-full truncate text-[14px] font-medium">{fromEmail}</p>
            <p className="text-[#FCFCFC]/40 w-[33px] text-[12px]">Mar 7</p>
          </div>
          <div className="flex h-[18px] w-[154px] overflow-hidden">
            <p className="text-[12px] text-[#E1E0E0] truncate">{subject}</p>
          </div>
        </div>
        <div>
          <Image src={campaign} alt="campaign"/>
        </div>
      </div>
    </div>
  );
};

export default Email;
