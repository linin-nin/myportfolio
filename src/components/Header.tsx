import React from 'react'
import Link from 'next/link'
import Button from './biography/Button'

const Header = () => {
  return (
    <div className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4'>
        <nav className='bg-slate-50 text-slate-950 font-bold flex justify-between items-center py-3 px-5 rounded-xl'>
            <div className='text-2xl'>
                <Link href="/" aria-label='Home page'>
                    Sreynin
                </Link>
            </div>
            <ul className='flex gap-6 items-center justify-center'>
                <li>
                    <Button label='Anout' linkField='/about' showIcon={false} className='border-none'/>
                </li>
                <li className=' text-slate-500'>/</li>
                <li>
                    <Button label='Projects' linkField='/project' showIcon={false} className='border-none'/>
                </li>
                <li>
                    <Button label='Contact' linkField='/' className=''/>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header