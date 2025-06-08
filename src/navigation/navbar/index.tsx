import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Theme from './theme'
const Navbar = () => {
  return (
    <nav className='justify-between flex items-center bg-light-900 dark:bg-dark-200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300 gap-5 color-white'>
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/logo.png" width={100} height={100} alt="Nextjs Dark Theme" />
         <p className='text-[24px] font-bold leading-[31.2px] text-dark-100 dark:text-light-900 max-sm:hidden'>Dark <span className='text-primary-500'>Theme</span></p>
      </Link>
       <p>Dark theme Nextjs</p>
       <div className='flex-between gap-5'><Theme/></div>

    </nav>
  )
}

export default Navbar
