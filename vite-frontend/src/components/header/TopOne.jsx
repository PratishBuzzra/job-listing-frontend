import React from 'react'
import { FaSearch } from "react-icons/fa";
const TopOne = () => {
  return (
    <header className='bg-[#F6FAFF] shadow-lg px-8 py-5'>
        <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <h2 className='font-bold text-2xl'>Available Jobs</h2>
            <div className='relative w-1/3'>
            <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500'/>
            <input type="text" placeholder='Search by title, company, or keywords...' className='w-full pl-12 pr-4 py-2 border border-gray-400 rounded-lg' />
            </div>
        </div>
      
    </header>
  )
}

export default TopOne
