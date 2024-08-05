import Image from 'next/image'
import React from 'react'
import arrow from "../../assets/arrow.svg"
const page = () => {
  return (
    <div className='flex justify-between items-center h-16 w-full border-[#343A40] border-[1px] border-l-0 bg-[#1F1F1F] p-6 gap-6'>
      <div className='flex w-32 h-6 gap-8 items-center'>
        <p className='font-sans font-bold text-base'>Onebox</p>
      </div>
      <div className='flex justify-between items-center w-[210px] h-6'>
        <div className='flex w-[51px] h-6 rounded-[80px] border-[1px] border-[#343A40] gap-2'>
          
        </div>
        <div className='flex items-center h-6 gap-2'>
          <span className='font-semibold text-base font-sans'>Tim's Workspace</span>
          <Image src={arrow}/>
        </div>
      </div>
    </div>
  )
}

export default page