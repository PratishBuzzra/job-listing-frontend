import React from 'react'
import { MdShare } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const TopTwo = () => {
    const navigate = useNavigate();
  return (
     <header className='bg-[#F6FAFF] shadow-lg px-8 py-5'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <div onClick={()=>navigate('/')} className='flex items-center gap-2 cursor-pointer'>
                    <IoMdArrowBack size={25}/>
                <h2 className='text-xl'>Back to Jobs</h2>
                </div>
                <div className='flex gap-8'>
               <MdShare size={25}/>
               <BsThreeDots size={25}/>
                </div>
            </div>
          
        </header>
  )
}

export default TopTwo
