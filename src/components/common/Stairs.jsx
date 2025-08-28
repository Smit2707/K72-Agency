import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
const Stairs = ({ children }) => {

    const path = useLocation().pathname;

    const stairParentRef = useRef(null);

    const pageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(stairParentRef.current, {
            display: "block",
            delay: -0.5
        })
        tl.from(".stair", {
            height: 0,
            // duration: 1,
            stagger: {
                amount: -0.15
            },
        })
        tl.to(".stair", {
            y: "100%",
            stagger: {
                amount: -0.15
            },
        })
        tl.to(stairParentRef.current, {
            display: "none",

        })
        tl.to(".stair", {
            y: "0%"
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.2,
            scale:1.2
        })
    }, [path]);
    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-10'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-[#000]'></div>
                    <div className='stair h-full w-1/5 bg-[#000]'></div>
                    <div className='stair h-full w-1/5 bg-[#000]'></div>
                    <div className='stair h-full w-1/5 bg-[#000]'></div>
                    <div className='stair h-full w-1/5 bg-[#000]'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}

export default Stairs