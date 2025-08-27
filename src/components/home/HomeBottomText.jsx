import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6vw] text-white' to="/projects"> Projects</Link>
      <Link className='text-[6vw] text-white' to="/agency"> Agency</Link>
    </div>
  )
}

export default HomeBottomText