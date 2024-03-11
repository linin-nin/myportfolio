import React from 'react'
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
    <div className='grid gap-x-8 md:my-20 my-10 gap-y-6 md:grid-cols-[2fr, 1fr]'>
        <Heading as="h1" size='lg' className='col-start-1'>
            {header}
        </Heading>
        <div className="ml-0 md:ml-12 col-start-1">
            <Heading as="h1" size='sm'>
              {major}
            </Heading>
            <h2 className='text-slate-400 text-xl md:text-2xl mb-5 font-bold mt-2'>{date} / {organization}</h2>
            <p className="text-slate-300 prose prose-xl prose-slate prose-invert">{description}</p>
        </div>
    </div>
  )
}

export default BioTemp