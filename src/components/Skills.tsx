import React from 'react'
import Bounded from './Bounded'
import Heading from './Heading'

const Skills = () => {
  return (
    <Bounded>
        <Heading as="h1" size='xl'>
            Skills
        </Heading>
        <div className="ml-16 pt-16 w-[740px]">
            <Heading as="h1" size='sm' className='mb-2'>
              HTML - CSS
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              Typescript - JavaScript
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              Django - Python
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              React.JS - Vue.Js - Next.JS
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              Node.JS
            </Heading>
        </div>
    </Bounded>
  )
}

export default Skills