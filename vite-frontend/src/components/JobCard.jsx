import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const JobCard = ({job}) => {
    const navigate = useNavigate();
  return (
    <div className='bg-white shadow rounded-lg p-4 md:p-6 flex flex-col gap-3 w-full'>
        <div className='flex justify-between items-start gap-3'>
            <div className='flex items-start gap-3 min-w-0'>
            <img className='w-10 h-10 md:w-12 md:h-12 object-cover shrink-0' src={job.image} alt="hek" />
            <div className='min-w-0'>
                <h3 className='font-bold text-base md:text-lg lg:text-xl wrap-break-word'>{job.title}</h3>
                <p className='text-gray-500 text-xs md:text-sm wrap-break-word'>{job.company}</p>
            </div>
            </div>
            <button className='shrink-0'><FaBookmark className='w-5 h-5 md:w-6 md:h-6 text-gray-600'/></button>
        </div>

        <div className='flex flex-wrap gap-2'>
            {job.tags.map((tag)=>(
                <span key={tag} className='text-xs px-2 py-1 rounded bg-[#E6F0FF] whitespace-nowrap'>{tag}</span>
            ))}

        </div>

        <div className='flex flex-wrap items-center justify-between gap-3 pt-2'>
            <p>Posted {job.posted}</p>
            <button onClick={()=>navigate(`/${job.id}`)}
        className="bg-green-800 text-white px-4 py-2 text-sm rounded cursor-pointer"
      >
        View Details
      </button>
        </div>
      
    </div>
  )
}

export default JobCard
