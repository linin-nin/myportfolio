"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { data } from '@/app/_data'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Blog = () => {

  const component = useRef(null)
  const revealRef = useRef(null)
  const itemsRef = useRef<Array<HTMLLIElement | null>>(null)
  const [currectItem, setcurrectItem] = useState<null | number>(null)

  const contentimage = data.map((item) => item.image.original)

  const onmouseEnter = (index:number) => {
    setcurrectItem(index)
  }
  const onmouseLeave = () => {
    setcurrectItem(null)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current?.forEach((item) => {
        gsap.fromTo(item, {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "eastic.out(1,0.3)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100px",
            markers: true,
            end: "bottom center",
            toggleActions: "play none none none"
          }
        })
      })
    } )
  })

  const lastMousePos = useRef({x:0, y:0})
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY}

      // calculate speeech

      const speech = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2))

      let ctx = gsap.context(() => {
        if(currectItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350
          const maxX = window.innerWidth - 250

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotaion: speech * (mousePos.x > lastMousePos.current.x ? 1: -1),
            ease: "back.out(2)",
            duration: 1.3,
            opacity: 1
          })
        }
        lastMousePos.current = mousePos
        return () => ctx.revert()
      }, component)
    }
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [currectItem])

  return (
    <div ref={component}>
      <ul onMouseLeave={onmouseLeave} className='grid border-b border-b-slate-100'>
        {
          data.map((item, index) => (
              <li 
                ref={(item) => {
                  if(itemsRef.current) {
                    itemsRef.current[index] = item
                  }
                 } }
                key={index}
                className='list-item opacity-0f'
                onMouseEnter={() => onmouseEnter(index)}
              >
                <Link href={item.link} className='flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row'>
                  <div className='flex flex-col'>
                    <span className='text-3xl font-bold'>{item.title}</span>
                    <div className='flex gap-3 text-yellow-400 text-lg font-bold'>
                      {item.tag.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>View More <ArrowUpRight className='inline-block'/></span>
                </Link>
              </li>
          ))
        }
      </ul>
      {/* Hover animate */}
      <div ref={revealRef} className='hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg  bg-over bg-center opacity-0f transition-[background] duration-300'
          style={{
            backgroundImage: currectItem !== null ? `url(${contentimage[currectItem]})` : "",
            // objectFit: "cover",
            backgroundSize: "cover",
            width: "220px",
            height: "220px",
          }}
      >
        {/* <Image src={currectItem !== null ? contentimage[currectItem] : ""} alt='img' width={220} height={320} className="object-cover"/> */}

      </div>
    </div>
  )
}

export default Blog