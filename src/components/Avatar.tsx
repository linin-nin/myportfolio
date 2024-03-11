"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import gsap from 'gsap'

type AvatarProps = {
    image: string,
    className?: string
}

const Avatar = ({image, className}:AvatarProps) => {
    const component = useRef(null)

    useEffect(() => {
        if(component.current){
            gsap.context(() => {
                gsap.fromTo(
                    '.avatar',
                    {
                        opacity:0,
                        scale:1.4
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.3,
                        ease: 'power3.inOut'
                    }
                )
                window.onmousemove = (e) => {
                    if(!component.current) return;
                    const componentReact = (component.current as HTMLElement).getBoundingClientRect()
                    const componentCenterX = componentReact.left + componentReact.width / 2

                    let componentPercent = {
                        x: (e.clientX - componentCenterX) / componentReact.width / 2
                    }

                    let disFromeCenter = 1 - Math.abs(componentPercent.x)

                    gsap.timeline({
                        defaults: {
                            duration: 0.5,
                            overwrite: "auto",
                            ease: "power3.Out"
                        }
                    })
                    .to('.avatar', {
                        rotate: gsap.utils.clamp(-2, 2, 5*componentPercent.x),
                        duration: 0.5
                    }, 0)
                    .to('.highlight', {
                        opacity: disFromeCenter  - 0.7,
                        x: -10 + 20 & componentPercent.x,
                        duration: 0.5
                    }, 0)
                }
            })
        }
    }, [])

  return (
    <div ref={component} className={clsx("relative h-full w-full", className)}>
        <div className='avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0'>
          <Image src={image} alt='cover' fill className='avatar-image w-full h-full object-cover'/>
          <div className='highlight absolute inset-0 hidden  w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block'></div>
        </div>
    </div>
  )
}

export default Avatar