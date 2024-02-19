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
        <div>
            <Heading as="h2" size='sm'>
            Bachelor degree of Computer
            Science and Engineering
            </Heading>
            <h2 className='text-slate-600'>2016 - 2018/SUNY</h2>
            <p>Pursued a Bachelor degree in Royal University of Phnom Penh, specializing in designing
             user-friendly interfaces and conducting user research.</p>
        </div>
    </Bounded>
  )
}

export default Education