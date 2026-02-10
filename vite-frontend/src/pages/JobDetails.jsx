import React from 'react'
import TopTwo from '../components/header/TopTwo'
import jobs from '../data/jobs'
import { useParams } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";
import JobDescriptions from '../components/JobDescriptions';
import { toast } from 'react-toastify';

const JobDetails = () => {
    const {id} = useParams();
     const job = jobs.find((j) => j.id === Number(id));
  return (
    <div>
        <TopTwo />
        <div className='min-h-screen max-w-6xl mx-auto py-8 px-4'>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
            <div className='flex items-start gap-5'>
                <div>
                    <img className='w-16 h-16 md:w-20 md:h-20 object-cover shrink-0' src={job.image} alt="job" />
                </div>
                <div>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold wrap-break-word'>{job.title}</h1>
                    <p className='text-sm text-gray-400 flex flex-wrap gap-x-2'><span>{job.company}</span> <span>{job.location}</span>  <span>{job.type}</span> </p>
                </div>

            </div>
            <div className='flex flex-col sm:flex-row gap-3 w-full md:w-auto'>
                <button className='border text-black px-4 py-2 rounded flex items-center justify-center gap-2 w-full sm:w-auto'><FaBookmark />Save</button>
                <button onClick={()=>toast.success("Application Submitted Successfully")} className='bg-green-800 text-white px-4 py-2 rounded w-du
                 sm:w-auto'>Apply Now</button>
            </div>
            </div>

        <JobDescriptions job={job}/>
        </div>
      
    </div>
  )
}

export default JobDetails
