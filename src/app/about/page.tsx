import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import TechList from '@/components/TechList'
import Avatar from '@/components/Avatar'
import Education from '@/components/Bio-template'

const Page = () => {
  return (
    <>
      <Bounded>
        <div className='grid gap-x-8 gap-y-6 md:grid-cols-[2fr, 1fr]'>
            {/* <div className=' '> */}
            <Heading as='h1' size='xl' className='col-start-1'>
                About me
            </Heading>
            <div className="prose prose-xl prose-slate prose-invert col-start-1">
            My name is Sreynin Pon. I am a person who have good
            communication with other people, love challenging, enjoy pushing
            myself to overcome obstacles, and approach problems from different
            angles allows me to find effective solutions. I am seeking a position
            that is related to my educational background and skills. I believe it is
            valuable occupation and I want to challenge what I have learned.
            </div>
            <Button linkField='https://t.me/ponsreynin' label='Contact'/>
            {/* </div> */}
            <Avatar image='/pic.jpg' className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"/>
        </div>
      </Bounded>
      {/* <TechList/> */}
      {/* <Education/> */}
    </>
  )
}

export default Page