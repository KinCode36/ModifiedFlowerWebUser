import React from 'react'
import { Link } from 'react-router-dom'
const Head = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-8 sm:py-10 px-0 sm:px-2'>
        <h1 className='font-serif text-2xl sm:text-3xl lg:text-4xl'>Featured <span className='text-[#6B8F71]'>Blooms</span></h1>
        <Link to='/shop'>View all →</Link>
    </div>
  )
}

export default Head