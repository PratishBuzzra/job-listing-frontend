import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const JobCard = ({job}) => {
    const navigate = useNavigate();
  return (
    <div className='bg-white shadow rounded-lg p-8 flex flex-col gap-3 w-full'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
            <img className='w-12 h-12 object-cover' src={job.image} alt="hek" />
            <div>
                <h3 className='font-bold text-2xl'>{job.title}</h3>
                <p className='text-gray-500 pt-1 text-sm'>{job.company}</p>
            </div>
            </div>
            <button><FaBookmark size={25}/></button>
        </div>

        <div className='flex flex-wrap gap-2 items-center pt-2'>
            {job.tags.map((tag)=>(
                <span key={tag} className='text-xs px-2 py-1 rounded bg-[#E6F0FF]'>{tag}</span>
            ))}

        </div>

        <div className='flex items-center justify-between'>
            <p>Posted {job.posted}</p>
            <button onClick={()=>navigate(`/${job.id}`)}
        className="bg-green-800 text-white px-4 py-2 rounded cursor-pointer"
      >
        View Details
      </button>
        </div>
      
    </div>
  )
}

export default JobCard
