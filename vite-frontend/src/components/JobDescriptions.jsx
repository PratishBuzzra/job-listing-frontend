import React from 'react'


const JobDescriptions = ({job}) => {

  return (
    <div className='flex gap-8'>
        <div className='flex-1 space-y-3'>
            <h3 className='text-xl font-bold mt-2'>About the Role</h3>
            <p className='leading-relaxed text-gray-500'>
                {job.aboutjob}
            </p>

            <h3 className='text-xl font-bold mt-2'>Responsibilities</h3>
            <ul className='list-disc space-y-1'>
                {job.responsibilities.map((item, index)=>(
                    <li key={index} className='text-gray-500'>{item}</li>
                ))}

            </ul>
            <h3 className='text-xl font-bold mt-2'>Requirements</h3>
            <ul className='list-disc space-y-1'>
                {job.requirements.map((item, index)=>(
                    <li key={index} className='text-gray-500'>{item}</li>
                ))}

            </ul>
            <h3 className='text-xl font-bold mt-2'>Benefits</h3>
            <p className='text-gray-500 leading-relaxed'>{job.benefits}</p>

        </div>
      
    </div>
  )
}

export default JobDescriptions
