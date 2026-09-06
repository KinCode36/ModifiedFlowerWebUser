import React from 'react'
import { X } from 'lucide-react';
const Product = ({item}) => {
    return (
        <div className='flex items-center gap-4'>
           

            <img src={item.image} alt={item.name}
                className="w-16 h-16 object-cover rounded-sm"
            />

            <p className='text-sm font-medium text-gray-700'>
                {item.name}
            </p>

        </div>
    )
}

export default Product