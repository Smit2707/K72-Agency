import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-[1vw]'>
      <Link className='text-[5vw] font-[500] hover:border-[#D5FD50] hover:text-[#D3FD50] ease duration-400 border-3 rounded-full px-[2vw] py-[0vw] border-white text-white uppercase' to="/projects"> Projects</Link>
      <Link className='text-[5vw] font-[500] hover:border-[#D5FD50] hover:text-[#D3FD50] ease duration-400 border-3 rounded-full px-[2vw] py-[0vw] border-white text-white uppercase' to="/agency"> Agency</Link>
    </div>
  )
}

export default HomeBottomText