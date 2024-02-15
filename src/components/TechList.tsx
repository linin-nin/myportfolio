"use client"

import React, { useEffect, useRef } from 'react'
import Heading from './Heading'
import Bounded from './Bounded'

import { CircleDot } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Iuse = [
    {
        tech_name: "React.js",
        tech_color: "#7F27FF"
    },
    {
        tech_name: "Next.js",
        tech_color: "#FF8911"
    },
    {
        tech_name: "Gsap",
        tech_color: "#FEFBF6"
    },
    {
        tech_name: "Three.js",
        tech_color: "#F72798"
    },
  ]


const TechList = () => {
    const component = useRef(null)
    useEffect(() => {
        if(component.current){
            let ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: component.current,
                        // markers: true,   
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 4
                    }
                })

                tl.fromTo(".tech-row", {
                    x: (index) => {
                        return index % 2 == 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400)
                    }
                },{
                    x: (index) => {
                        return index % 2 == 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400)
                    },
                    ease: "power1.inOut"
                })
            })
            return () => ctx.revert()
        }
    })


  return (
    <section className='overflow-hidden' ref={component}>
        <Bounded as='div'>
            <Heading size='lg' as='h2' className='mb-8'>
                What I use
            </Heading>
        </Bounded>

        <div>
            {Iuse.map(({tech_color, tech_name}, index) => (
                <div key={index} className='tech-row mb-8 flex items-center justify-center gap-4 text-slate-700'>
                    {Array.from({length: 15}, (_, index) => (
                        <React.Fragment key={index}>
                            <span className='tech_item text-8xl font-extrabold uppercase tracking-tighter' 
                                    style={{color: index == 7 && tech_color ? tech_color : "inherit"}}
                            >
                                {tech_name}
                            </span>
                            <span className='text-3xl'>
                                <CircleDot />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechList