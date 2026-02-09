import React from 'react'
import { Route, Routes } from 'react-router-dom'


import FindJobs from './pages/FindJobs'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
  
    <Routes>
      <Route path='/findjobs' element={<FindJobs />} />
    </Routes>
    </Layout>
  )
}

export default App
