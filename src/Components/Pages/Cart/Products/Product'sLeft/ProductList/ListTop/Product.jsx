import React from 'react'
import { X } from 'lucide-react';
const Product = ({ item, removeFromCart }) => {
    return (
        <div className='flex items-center gap-4'>
            <button
                onClick={() => removeFromCart(item.id)}
                className=' cursor-pointer'>
                <X size={15} />
            </button>
          <div className='lg:flex items-center gap-4'>
            <img src={item.image} alt={item.title}
                className="w-8 h-8 lg:w-16 lg:h-16 object-cover rounded-sm"
                />

            <p className='lg:text-sm font-medium text-gray-700 xs: text-[10px]'>
                {item.title}
            </p>
                </div>

        </div>
    )
}

export default Product