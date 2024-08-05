"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import search from "../../assets/search.svg";
import refresh from "../../assets/refresh.svg";
import Email from "../../components/Email/page";

const Page = () => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.error("No token found");
      setError("No token found");
      return;
    }
    localStorage.setItem("token", `Bearer ${token}`);
    fetchEmails(token);
  }, []);

  const fetchEmails = async (token) => {
    const apiUrl = "https://hiring.reachinbox.xyz/api/v1/onebox/list";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("API Response Data:", result);

      if (Array.isArray(result.data)) {
        setEmails(result.data);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
      setError(`Error fetching emails: ${error.message}`);
    }
  };

  return (
    <div className="flex w-[307px] border-[1px] border-[#343A40] h-full items-center justify-center">
      <div className="flex flex-col w-[278px] h-full gap-2">
        <div className="flex items-center w-full h-[71px] justify-between">
          <div className="w-[171px] h-[64px] pt-[7px] gap-2 items-center">
            <div className="flex justify-between w-[160px] h-[47px] p-[10px] gap-1 items-center">
              <div className="flex items-center text-[#4285F4]">
                <p className="flex font-sans w-[112px] h-[27px] font-bold text-[20px]">
                  All Inbox(s)
                </p>
                <div className="flex w-[24px] h-[24px] items-center">
                  <div className="flex w-[16px] h-[17px] items-center">
                    <Image src={arrow} width={14} height={14} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[23px] py-[2px] px-[10px] gap-[10px]">
              <div className="w-[151px] h-[19px] font-bold text-[14px] font-sans">
                <span>25/25</span>{" "}
                <span className="font-normal text-[#7F7F7F]">
                  Inboxes selected
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[32px] h-[32px] rounded-[4px] p-2 gap-2 bg-[#25262B] mr-2">
            <Image src={refresh} width={16} height={16} alt="refresh" />
          </div>
        </div>
        <div className="flex flex-col w-[275px] h-[76px] bg-[#000000]">
          <div className="flex w-[275px] h-[44px] p-2 gap-4 items-center justify-center">
            <Image src={search} alt="search" />
          </div>
          <div className="flex items-center w-[275px] h-8 py-[3px] px-2 gap-4">
            <div className="flex w-[256px] justify-between items-center">
              <div className="flex w-[129px] h-[26px] gap-1 items-center justify-between">
                <div className="w-[34px] h-[26px] bg-[#222426] rounded-[17px] px-[8px] py-[3px] gap-2 items-center">
                  <p className="w-[18px] h-[20px] gap-1 text-[#5C7CFA] font-semibold text-[14px]">
                    26
                  </p>
                </div>
                <div className="w-[91px] h-[20px]">
                  <p className="font-semibold text-[14px] text-[#E6E6E6]">
                    New Replies
                  </p>
                </div>
              </div>
              <div className="flex w-[79px] h-[20px] gap-4 items-center text-center">
                <p className="w-[53px] h-[20px] font-semibold text-[14px] text-[#E6E6E6]">
                  Newest
                </p>
                <Image src={arrow} width={10} height={6.17} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[278px] px-[9px]">
          {emails.map((email) => (
            <Email
              key={email.id}
              fromEmail={email.fromEmail}
              subject={email.subject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
