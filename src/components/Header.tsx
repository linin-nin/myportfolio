import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4'>
        <nav>
            <ul>
                <li>
                    <Link href="/" aria-label='Home page'>
                        Sreynin
                    </Link>
                </li>
                <li>
                    <Link href="/about" aria-label='Home page'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog" aria-label='Home page'>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header