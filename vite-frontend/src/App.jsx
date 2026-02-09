import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import FindJobs from './pages/FindJobs'

const App = () => {
  return (
    <div>
    <Sidebar />
    <Routes>
      <Route path='/findjobs' element={<FindJobs />} />
    </Routes>
    </div>
  )
}

export default App
