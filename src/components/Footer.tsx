import React from 'react'
import Bounded from './Bounded'
import Link from 'next/link'
import clsx from 'clsx'
import { Facebook, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <Bounded>
        <div className='container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row '>
            <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
            <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Sreynin
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © 2024 Sreynin Pon
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
        <ul className="flex items-center gap-1">
            <li>
              <Link
                className={clsx(
                  "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                )}
                href='#about'
              >
                About
              </Link>
            </li>
            <span
                className="text-4xl font-thin leading-[0] text-slate-400"
                aria-hidden="true"
              >
                /
            </span>
            <li>
              <Link
                className={clsx(
                  "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                )}
                href='#project'
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
            <Link
              href='https://www.linkedin.com/in/sreyninpon/'
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            >
              <Linkedin />
            </Link>
            <Link
              href='https://www.facebook.com/profile.php?id=100054628981903'
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            >
              <Facebook />
            </Link>
            <Link
              href='https://github.com/linin-nin'
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
            >
              <Github />
            </Link>
        </div>
        </div>
    </Bounded>
  )
}

export default Footer