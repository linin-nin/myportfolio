import React from 'react'
import Heading from './Heading'

const Ex = () => {
  return (
    <div className='grid gap-x-8 md:my-20 my-10 gap-y-6 md:grid-cols-[2fr, 1fr]'>
    <Heading as="h1" size='lg' className='col-start-1'>
        Experiences
    </Heading>
    <div className="ml-0 md:ml-12 col-start-1">
        <Heading as="h1" size='sm'>
            Frontend Developer Intern
        </Heading>
        <h2 className='text-slate-400 text-xl md:text-2xl mb-5 font-bold mt-2'>Aug 2023 - Mar 2024 / DreamsLab</h2>
        <p className="text-slate-300 prose prose-xl prose-slate prose-invert">
             As a frontend Developer, I proficient in Next.js, React.js, Tailwind, and Typescript. 
             I can create animation by using libraries like framer motion and GSAP. Additionally, 
             I have experience working with handless CSM system like Directus for content management.
        </p>


        <Heading className='mt-10' as="h1" size='sm'>
          Call Center
        </Heading>
        <h2 className='text-slate-400 text-xl md:text-2xl mb-5 font-bold mt-2'>Dec 2022 - Apr 2023 / InstafoodKh</h2>
        <p className="text-slate-300 prose prose-xl prose-slate prose-invert">
            As a call center, I handled customer’s order and inquiries from drivers. I was also responsible for 
            generating daily sales report, with included data on the day’s sales.
        </p>
    </div>
</div>
  )
}

export default Ex