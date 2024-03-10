import React from 'react'
import Bounded from './Bounded'
import Heading from './Heading'

type BioProps = {
    header?: string,
    major?: string,
    date?: string,
    organization?: string,
    description?: string
}

const BioTemp = ({header, major, date, organization, description}:BioProps) => {
  return (
    <Bounded>
        <Heading as="h1" size='xl'>
            {header}
        </Heading>
        <div className="ml-16 pt-16 w-[740px]">
            <Heading as="h1" size='sm'>
              {major}
            </Heading>
            <h2 className='text-slate-400 text-2xl mb-5 font-bold mt-2'>{date} / {organization}</h2>
            <p className="text-xl text-slate-300 ">{description}</p>
        </div>
    </Bounded>
  )
}

export default BioTemp