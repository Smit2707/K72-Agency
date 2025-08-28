import React, { useRef } from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Agency from '../pages/Agency'
import Navbar from '../components/navigation/Navbar'
import Works from '../pages/Works'
import FullScreenNav from '../components/navigation/FullScreenNav'


const MainRoutes = () => {
  
  return (
    <div className='text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/works' element={<Works />} />
        <Route path='/full-screen-nav' element={<FullScreenNav />} />
      </Routes>
    </div>
  )
}

export default MainRoutes