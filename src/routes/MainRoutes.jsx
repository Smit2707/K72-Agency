import React from 'react'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import { Route, Routes } from 'react-router-dom'
import Agency from '../pages/Agency'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agency' element={<Agency />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default MainRoutes