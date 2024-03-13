"use client"


import React, { useState } from 'react'
import Button from './Button';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from "lucide-react"

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">

        
        <div className="flex items-center justify-between">
            <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-slate-900"
            >
              Sreynin
            </Link>
          <button
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>


        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
            <li className="first:mt-8">
              <Link
                className={clsx(
                  "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                )}
                href="#about"
                onClick={() => setOpen(false)}
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  )}
                />
                <span className="relative">About</span>
              </Link>
            </li>
            <li className="first:mt-8">
              <Link
                className={clsx(
                  "group relative block overflow-hidden rounded px-3 text-3xl font-bold text-slate-900 ",
                )}
                href="#project"
                onClick={() => setOpen(false)}
              >
                <span
                  className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-12 rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                  )}
                />
                <span className="relative">Projects</span>
              </Link>
            </li>
              {/* <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span> */}

            <li>
            <Button
              linkField="/"
              label="Contact me"
              className="ml-3"
            />
            </li>
        </div>

        <DesktopMenu />

      </ul>
    </nav>
  )
}




  function DesktopMenu() {
    return (
      <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
        <li>
            <Button label='About' linkField='#about' showIcon={false} className='border-none'/>
        </li>
        <li>
            <span
                className="text-4xl font-thin leading-[0] text-slate-400"
                aria-hidden="true"
              >
                /
            </span>
        </li>
        <li>
            <Button label='Projects' linkField='#project' showIcon={false} className='border-none'/>
        </li>
        <li>
            <Button label='Contact' linkField='https://t.me/ponsreynin'/>
        </li>
      </div>
    );
  }

export default Navbar