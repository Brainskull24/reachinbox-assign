import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"
const page = () => {
    return (
    <div className='text-red-500 flex justify-center items-center border-b-[1px] border-[#25262B] w-full h-16'>   
        <Image src={logo} height={24} width={156} className=''/>
    </div>
  )
}

export default page