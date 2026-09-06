import React, { useState } from 'react'
import First from './First'
import Last from './Last'
import Middle from './Middle'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-[#2C2C2A] text-white fixed top-0 left-0 z-40 w-full'>
      <div className='flex justify-between items-center py-3 px-4 sm:px-7 min-h-14'>
        <First />

        <div className='hidden md:block'>
          <Middle />
        </div>

        <div className='flex items-center gap-3'>
          <div className='hidden sm:block'>
            <Last />
          </div>
          <button
            type='button'
            aria-label='Toggle navigation menu'
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className='md:hidden text-2xl leading-none p-1'
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className='md:hidden border-t border-white/10 px-4 pb-4 pt-2 bg-[#2C2C2A]'>
          <Middle />
          <div className='flex justify-center pt-3 sm:hidden'>
            <Last />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
