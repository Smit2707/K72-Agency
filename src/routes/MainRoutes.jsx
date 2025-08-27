import React from 'react'
import Home from '../pages/Home'
import Agent from '../pages/Agent'
import Projects from '../pages/Projects'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agent' element={<Agent />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default MainRoutes