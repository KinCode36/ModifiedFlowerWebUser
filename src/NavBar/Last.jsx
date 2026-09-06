import React from 'react'
import { Link } from 'react-router-dom'
const Last = () => {
  return (
    <div className='flex justify-between gap-4 sm:gap-6 lg:gap-10'>
        <Link>🔍</Link>
        <Link to='/profile'>👤</Link>
        <Link to='/cart'>🛒</Link>
        
    </div>
  )
}

export default Last