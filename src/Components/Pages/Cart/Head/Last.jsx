import React from 'react'
import { UserRound, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
const Last = () => {
  return (
    <div className='flex justify-between items-center gap-10'>
        <Link to='/profile'>
        <UserRound />
        </Link>
         
        <Link to='/wishlist'>
        <Heart />
        </Link>
    </div>
  )
}

export default Last