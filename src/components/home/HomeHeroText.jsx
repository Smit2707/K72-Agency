import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='text-white text-center font-[font2] tracking-wide pt-1'>
      <div className='uppercase leading-[8.7vw] text-[9.5vw] flex items-center justify-center'>
        The spark for <br />
      </div>
      <div className='uppercase leading-[8.7vw] text-[9.5vw] flex items-center justify-center'>
        all <div className='rounded-[10rem] h-[7vw] overflow-hidden'> <Video /> </div> things <br />
      </div>
      <div className='uppercase leading-[8.7vw] text-[9.5vw] flex items-center justify-center'>
        creative
      </div>
    </div>
  )
}

export default HomeHeroText