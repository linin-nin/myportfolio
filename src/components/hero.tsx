"use client"
import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import Bounded from './Bounded'

const Hero = () => {
    const firstname = "Andy"
    const lastname = "Bryant"

    const component = useRef(null)
    useEffect(() =>{
        let ctx = gsap.context(() =>{
            const tl = gsap.timeline();
            tl.fromTo(
                ".name-animation", 
                {
                    x: -100,
                    opacity: 0,
                    rotate: -10
                },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1,
                    transformOrigin: " left top",
                    delay: 0.5,
                    stagger: {
                        each: 0.1,
                        from: "random"
                    }
                }
            )

            tl.fromTo(
                ".job-title", 
                {
                    y:20,
                    opacity: 0,
                    scale: 1.2
                }, 
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scale: 1,
                    ease: "elastic.out(1, 0.3)",
                }
            )
        }, component)

        return () => ctx.revert();
    },[])


  return (
    <Bounded ref={component}>
        <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center'>
            <div className='col-start-1 md:row-start-1'>
                <h1 className='mb-8 text-[10rem] font-extrabold leading-none tracking-tighter'>
                    <span className='block text-slate-300'>
                        {
                            firstname.split('').map((letter, index) => (
                                <span key={index} 
                                    className={`name-animation inline-block opacity-0`}>
                                    {letter}
                                </span>
                            ))
                        }
                    </span>
                    <span className='block text-slate-300'>
                        {
                            lastname.split('').map((letter, index) => (
                                <span key={index} 
                                    className={`name-animation inline-block opacity-0 text-slate-600`}>
                                    {letter}
                                </span>
                            ))
                        }
                    </span>
                </h1>
                <span className='block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text
                 text-2xl font-bold uppercase translate-[.2em] text-transparent opacity-0 md:text-4xl job-title'>Creative developer</span>
            </div>
        </div>
    </Bounded>
  )
}

export default Hero