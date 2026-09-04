import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Bag = () => {
  return (
    <div>
      <Link to='/Cart'>
      <ShoppingCart /> 
      </Link>
    </div>
  )
}

export default Bag