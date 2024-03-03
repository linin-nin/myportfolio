import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Avatar from "@/components/biography/Avatar";
import Button from "@/components/biography/Button";
import Hero from "@/components/hero/hero";
import Education from "@/components/biography/Bio-template";


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
      <Education/>
    </main>
  );
}
