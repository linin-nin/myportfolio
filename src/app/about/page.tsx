import React from 'react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import TechList from '@/components/TechList'
import Avatar from '@/components/Avatar'

const Page = () => {
  return (
    <>
      <Bounded>
        <div className='grid1 gap-x-8 gap-y-6 md:grid-cols-2 grid-cols-1'>
            <Heading as='h1' size='xl' className='col-start-1'>
                About Sreynin
            </Heading>
            <div className="prose prose-xl prose-slate prose-invert col-start-1">
            Pon Sreynin is a visionary Web 3D Developer, pioneering the intersection of technology and creativity in the digital
             realm. With a passion for pushing the
             boundaries of immersive web experiences, Pon has established themselves as a leading figure in the dynamic field of 3D development.
             Born with an innate curiosity for technology, Pon embarked on their journey into the digital world at an early age. With a solid
              foundation in computer science and a keen eye for design, they quickly gravitated towards the realm of 3D development. Harnessing
               the power of emerging web technologies, Pon began experimenting with creating captivating, interactive 3D experiences that transcend 
               traditional boundaries.
            </div>
            <Button linkField='/' label='Resume'/>
            <Avatar image='/pic.jpg'/>
        </div>
      </Bounded>
      <TechList/>
    </>
  )
}

export default Page