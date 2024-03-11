import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <div className="grid gap-x-8 my-20 bg-red-500 gap-y-6 md:grid-cols-[2fr, 1fr]'">
        <Heading as="h1" size='xl' className='col-start-1'>
            Skills
        </Heading>
        <div className="ml-5 md:ml-12 col-start-1 ">
            <Heading as="h1" size='sm' className='mb-2'>
              HTML - CSS
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              Typescript - JavaScript
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              Django - MongoDB - SQL
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              React.JS - Next.JS
            </Heading>
            <Heading as="h1" size='sm' className='mb-2'>
              Node.JS
            </Heading>
        </div>
    </div>
  )
}

export default Skills