import React from 'react'
import { X } from 'lucide-react';
const Product = ({ item, removeFromCart }) => {
    return (
        <div className='flex items-center gap-4'>
<<<<<<< HEAD
            <button
                onClick={() => removeFromCart(item.id)}
                className=' cursor-pointer'>
                <X size={15} />
            </button>
=======
           
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b

            <img src={item.image} alt={item.title}
                className="w-16 h-16 object-cover rounded-sm"
            />

            <p className='text-sm font-medium text-gray-700'>
                {item.title}
            </p>

        </div>
    )
}

export default Product