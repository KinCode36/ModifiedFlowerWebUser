import React from 'react'
import { UserRound, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
const Last = () => {
  return (
    <div className="flex items-center gap-6">
      <Link to="/profile">
        <UserRound />
      </Link>

      <Link to="/wishlist">
        <Heart />
      </Link>
    </div>
  )
}

export default Last