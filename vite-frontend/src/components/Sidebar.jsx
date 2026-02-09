import React from 'react'
import { MdWork } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import {Link, NavLink} from "react-router-dom"

const navItems = [
  { to: '/dashboard', icon: <MdDashboard size={24} />, label: 'Dashboard' },
  { to: '/findjobs', icon: <FaSearch size={24} />, label: 'Find Jobs' },
  { to: '/applications', icon: <BiSolidNotepad size={24} />, label: 'Applications' },
  { to: '/savedjobs', icon: <FaBookmark size={24} />, label: 'Saved Jobs' },
  { to: '/messages', icon: <RiMessage2Fill size={24} />, label: 'Messages' },
];
const Sidebar = () => {
  return (
    
        <aside className='w-64 bg-[#F1F5F9] shadow-sm  p-7 flex flex-col min-h-screen'>
            <div className='flex items-center gap-5 mb-12'>    
                <span><MdWork size={30}/></span>  
                <span className='text-2xl font-bold'>JOBHUNT</span>
            </div>

            <nav className='flex-1 space-y-1'>
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.to} className={({isActive})=> `flex items-center gap-3 px-3 py-4 ${isActive ? "bg-[#E6F0FF] rounded-lg" : ''}`}>
          {item.icon}
          <span className='text-lg'>{item.label}</span>
        </NavLink>
      ))}
    </nav>

            <div className=''>
                <div className='flex items-center gap-4 p-3 cursor-pointer'>
                    <FaUserCircle size={30}/>
                    <span className='text-xl font-medium'>My Profile</span>

                </div>
            </div>

        </aside>
      
  )
}

export default Sidebar
