import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Hero from "@/components/hero";
import BioTemp from "@/components/Bio-template";
import Skills from "@/components/Skills";
import Blog from "@/components/BlogList";
import Ex from "@/components/Ex";


export default function Home() {
  return (
    <Bounded>
      <Hero/>
      <div id="about" className='grid gap-x-8 md:mt-20 mt-10 gap-y-6 md:grid-cols-[2fr, 1fr]'>
          <Heading as='h1' size='lg' className='col-start-1'>
              About me
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert ml-0 md:ml-12 col-start-1">
          Hello, My name is Sreynin Pon. I am a university student in year 3 and a frontend developer with a passion for challenging and 
          exploring new opportunities to enhance my technical skills and professional experience. 
          <br/><br/>
          In frontend development, I&apos;m particularly skilled in React, Next, JavaScript, Typescript and HTML/CSS. 
          I&apos;ve worked on various projects, including developing a responsive e-commerce and animated web page.
          <br/><br/>
          When I am not coding, I find new experience with digital art or exploring the latest in web animation.
          
          </div>


      </div>

      <BioTemp header="Education" organization="Royal University of Phnom Penh" date="2022 - Present" major="Bachelor of science in Computer Science and Engineering" />

      <Skills/>

      <Ex/>
      
      <Heading size='lg' className='mb-8'>
          Projects
      </Heading>
      <div id="project" className='prose prose-xl ml-0 prose-invert mb-10'>
          Here are some projects I have been working on:
      </div>
      <Blog/>
      
    </Bounded>
  );
}
