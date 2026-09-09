import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 font-serif font-light flex flex-col sm:flex-row gap-4 sm:items-center justify-between'>
      <h1 className='text-3xl sm:text-4xl text-white'>Event <span className='text-[#e8bdb5]'>Decoration</span></h1>
      <Link to='/services' className='text-[#a8c5ad] font-medium text-sm'>All packages →</Link>
    </div>
  )
}

export default Nav