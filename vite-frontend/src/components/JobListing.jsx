import React from 'react'
import jobs from '../data/jobs'
import JobCard from './JobCard'

const JobListing = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mb-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
    </div>
  )
}

export default JobListing
