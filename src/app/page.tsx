import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Hero from "@/components/hero";
import BioTemp from "@/components/Bio-template";
import Skills from "@/components/Skills";
import Blog from "@/components/BlogList";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Bounded>
        <div className='grid grid-cols-2 gap-80'>
            <div className=' '>
              <Heading as="h1" size='xl' className=''>
                  About Me
              </Heading>
              <div className="prose prose-xl prose-slate prose-invert">
              My name is Sreynin Pon. I am a person who have good
              communication with other people, love challenging, enjoy pushing
              myself to overcome obstacles, and approach problems from different
              angles allows me to find effective solutions. I am seeking a position
              that is related to my educational background and skills. I believe it is
              valuable occupation and I want to challenge what I have learned.
              </div>
              <Button linkField='https://t.me/ponsreynin' label='Contact'/>
            </div>
            <Avatar image='/pic.jpg'/>
        </div>
      </Bounded>
      <BioTemp header="Education" organization="Royal University of Phnom Penh" date="2022 - Present" major="Computer Science and Engineering" description="Pursued a Bachelor degree in Royal University of Phnom Penh, specializing in designing
             user-friendly interfaces and conducting user research."/>
      {/* Skills */}
      <Skills/>
      <BioTemp  header="Experiences" organization="DreamsLab" date="2023 - Present" major="Web Developer Intern" description="web developing specializing in front-end development and interactive animation,
            utilize headless CMS solutions, like Handless, which allows for seamless API integration and content flexibility, and collaborate with team leads and UX/UI designers throughout the development process." />
      <Bounded>
        <Heading size='xl' className='mb-8'>
            Projects
        </Heading>
        <div className='prose prose-xl prose-invert mb-10'>
            Here are what I&apos;ve Worked so others can benefit.
        </div>
        <Blog/>
        
    </Bounded>
    </main>
  );
}
