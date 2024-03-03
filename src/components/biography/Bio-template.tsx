import React from 'react'
import Bounded from '../Bounded'
import Heading from '../Heading'

type EduProps = {
    heading: string,
    header?: string
}

const Education = () => {
  return (
    <Bounded>
        <Heading as="h1" size='xl'>
            Education
        </Heading>
        <div className="ml-20 pt-16 w-[740px]">
            <Heading as="h1" size='sm'>
              Bachelor&apos;s degree of Computer
              Science
            </Heading>
            <h2 className='text-slate-600 text-2xl mb-7 font-bold'>2022 - Present</h2>
            <p className="text-xl text-slate-600 ">Pursued a Bachelor degree in Royal University of Phnom Penh, specializing in designing
             user-friendly interfaces and conducting user research.</p>
        </div>
    </Bounded>
  )
}

export default Education