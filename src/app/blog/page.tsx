/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import Blog from '@/components/contant/BlogList'

const Page = () => {
  return (
    <Bounded>
        <Heading size='xl' className='mb-8'>
            Bolg
        </Heading>
        <div className='prose prose-xl prose-invert mb-10'>
            I write about what I've learned so others can benefit.
        </div>
        <Blog/>
        
    </Bounded>
  )
}

export default Page