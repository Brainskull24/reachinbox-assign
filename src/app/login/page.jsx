'use client'
import React, { useEffect } from "react";
import google from "../../../public/google.svg";
import Image from "next/image";

const Page = () => {
  const handleLogin = async () => {
    const apiUrl = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000';
    try {
      window.location.href = apiUrl;
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');
    if (token) {
      localStorage.setItem('jwtToken', token);
      window.location.href = '/google-login';
    }
  }, []);

  return (
    <div className="flex px-[29px] py-[59px] gap-[150px] justify-center items-center h-[663px]">
      <div className="flex flex-col w-[28.75rem] border-[#343A40] border-[1px] h-[19.5rem] rounded-[1rem] gap-[3rem] pt-[1.5rem] p-[2.5rem] bg-[#121212]">
        <div className="flex flex-col w-[23.75rem] h-[103px] gap-6 items-center">
          <span className="flex h-[2rem] font-sans text-[1.25rem] text-center font-semibold">
            Create a new account
          </span>
          <button className="flex h-12 w-full rounded-[0.25rem] border-[1px] border-[#707172] py-[0.5rem] px-[1rem] gap-[10px] justify-center" onClick={handleLogin}>
            <div className="flex gap-3 h-8 w-[181px] justify-center text-center">
              <Image src={google} width={23} height={32} alt="Google Logo" />
              <p className="flex font-sans text-base text-center leading-[26px] h-[27px]">Sign Up with Google</p>
            </div>
          </button>
        </div>
        <div className="flex flex-col w-[380px] h-[97px] gap-6 items-center">
          <div className="flex h-12 bg-custom-gradient items-center justify-center rounded-[4px] px-[35px] py-[13px] gap-[10px]">
            <p className="h-[22px] font-semibold text-[14px] text-[#FFFFFF] font-sans">Create an Account</p>
          </div>
          <div className="flex w-[380px] h-[25px] gap-[13px] items-center justify-center">
            <div className="flex h-[25px] gap-[4px]">
              <p className="flex h-full text-base font-normal text-[#909296]">
                Already have an account?
              </p>
              <span className="flex h-[25px] text-base font-normal text-[#C1C2C5]">
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
