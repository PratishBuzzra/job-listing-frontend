import React from 'react'
import TopOne from '../components/header/TopOne'
import FilterCategory from '../components/FilterCategory'
import JobCard from '../components/JobCard'
import JobListing from '../components/JobListing'

const FindJobs = () => {
  return (
    <div>
      <TopOne />
      <FilterCategory />
      <JobListing />

    </div>
  )
}

export default FindJobs
