"use client"

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { data } from '@/app/_data'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const Blog = () => {

  const component = useRef(null)
  const [currectItem, setcurrectItem] = useState<null | number>(null)
  const contentimage = data.map((item) => item.image.original)

  const onmouseEnter = (index:number) => {
    setcurrectItem(index)
  }
  const onmouseLeave = () => {
    setcurrectItem(null)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY}
    }
  })

  return (
    <div ref={component}>
      <ul onMouseLeave={onmouseLeave} className='grid border-b border-b-slate-100'>
        {
          data.map((item, index) => (
              <li 
                key={index}
                className='list-item opacity-0f'
                onMouseEnter={() => onmouseEnter(index)}
              >
                <Link href="" className='flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row'>
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
      <div className='hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg  bg-over bg-center opacity-0f transition-[background] duration-300'
          // style={{
          //   backgroundImage: currectItem !== null ? `url${contentimage[currectItem]}` : ""
          // }}
      >
        <Image src={currectItem !== null ? contentimage[currectItem] : ""} alt='image' width={220} height={320}/>

      </div>
    </div>
  )
}

export default Blog