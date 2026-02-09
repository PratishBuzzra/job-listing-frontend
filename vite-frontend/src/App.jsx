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
      <Route path='/' element={<FindJobs />} />
      <Route path='/:id' element={<JobDetails />} />
    </Routes>
    </Layout>
  )
}

export default App
