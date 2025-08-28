import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react'

const Agency = () => {
  const [src, setSrc] = useState("")
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "/assets/persons/pr1.jpg",
    "/assets/persons/pr2.jpg",
    "/assets/persons/pr3.jpg",
    "/assets/persons/pr4.jpg",
    "/assets/persons/pr5.jpg",
    "/assets/persons/pr6.jpg",
    "/assets/persons/pr7.jpg",
    "/assets/persons/pr8.jpg",
    "/assets/persons/pr9.jpg",
    "/assets/persons/pr10.jpg",
    "/assets/persons/pr11.jpg",
    "/assets/persons/pr12.jpg",
    "/assets/persons/pr13.jpg",
    "/assets/persons/pr14.jpg"
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 35.8%",
        end: "top -120%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType:'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          setSrc(imageArray[Math.floor(e.progress * (imageArray.length - 1))])
          // imageRef.current.src = (imageArray[Math.floor(e.progress * (imageArray.length - 1))])
        }
      }
    })
  })
  return (
    <>
      <div className='section1 relative py-1'>
        <div ref={imageDivRef} className='h-72 w-50 absolute z-0 top-60 left-[29%] rounded-xl overflow-hidden object-cover'>
          <img className='h-full w-full' src={src} alt="" />
        </div>
        <div className='font-[font1] relative'>
          <div className='mt-86'>
            <h1 className='font-[500] text-[19vw] text-center tracking-wider uppercase leading-[17vw]'>SEVEN7Y <br />
              TWO
            </h1>
            <div className='pl-[40%] mt-10'>
              <p className='text-5xl leading-[3.5rem]'>
                <span className='pl-[40%]'>We’re</span> inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </>
  )
}

export default Agency