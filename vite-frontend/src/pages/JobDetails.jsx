import React from 'react'
import TopTwo from '../components/header/TopTwo'
import jobs from '../data/jobs'
import { useParams } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa";
import JobDescriptions from '../components/JobDescriptions';

const JobDetails = () => {
    const {id} = useParams();
     const job = jobs.find((j) => j.id === Number(id));
  return (
    <div>
        <TopTwo />
        <div className='min-h-screen max-w-6xl mx-auto py-8 px-4'>
            <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div>
                    <img className='w-20 h-20 object-cover' src={job.image} alt="job" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>{job.title}</h1>
                    <p className='text-sm text-gray-400'>{job.company}  {job.location}  {job.type}</p>
                </div>

            </div>
            <div className='flex gap-3'>
                <button className='border text-black px-4 py-2 rounded flex items-center gap-2'><FaBookmark />Save</button>
                <button className='bg-green-800 text-white px-4 py-2 rounded'>Apply Now</button>
            </div>
            </div>

        <JobDescriptions job={job}/>
        </div>
      
    </div>
  )
}

export default JobDetails
