import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import FindJobs from './pages/FindJobs'
import Layout from './components/Layout'
import JobDetails from './pages/JobDetails'

const App = () => {
  return (
    <Layout>
      <ToastContainer/>
  
    <Routes>
      <Route path='/jobs' element={<FindJobs />} />
      <Route path='/jobs/:id' element={<JobDetails />} />
    </Routes>
    </Layout>
  )
}

export default App
