import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Hero from "@/components/hero";
import BioTemp from "@/components/Bio-template";
import Skills from "@/components/Skills";
import Blog from "@/components/BlogList";


export default function Home() {
  return (
    <Bounded>
      <Hero/>
      <div className='grid gap-x-8 md:mt-20 mt-10 gap-y-6 md:grid-cols-[2fr, 1fr]'>
          <Heading as='h1' size='lg' className='col-start-1'>
              About me
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert ml-0 md:ml-12 col-start-1">
          My name is Sreynin Pon. I am a person who have good
          communication with other people, love challenging, enjoy pushing
          myself to overcome obstacles, and approach problems from different
          angles allows me to find effective solutions. I am seeking a position
          that is related to my educational background and skills. I believe it is
          valuable occupation and I want to challenge what I have learned.
          </div>
          {/* <Button linkField='https://t.me/ponsreynin' label='Contact'/> */}

      </div>

      <BioTemp header="Education" organization="Royal University of Phnom Penh" date="2022 - Present" major="Computer Science and Engineering" description="Pursued a Bachelor degree in Royal University of Phnom Penh, specializing in designing user-friendly interfaces and conducting user research."/>

      <Skills/>

      <BioTemp  header="Experiences" organization="DreamsLab" date="Aug 2023 - Mar 2024 " major="Web Developer Intern" description="web developing specializing in front-end development and interactive animation, utilize headless CMS solutions, like Handless, which allows for seamless API integration and content flexibility, and collaborate with team leads and UX/UI designers throughout the development process." />

      <Heading size='lg' className='mb-8'>
          Projects
      </Heading>
      <div className='prose prose-xl ml-0 md:ml-12 prose-invert mb-10'>
          Here are what I&apos;ve Worked so others can benefit.
      </div>
      <Blog/>
      
    </Bounded>
  );
}
