import React from 'react'
import { Minus, Plus } from 'lucide-react';
const ProductQuantity = ({item,  increaseQuantity, decreaseQuantity,}) => {
    return (

        <div className="flex h-11 w-[110px] items-center justify-between rounded-md border border-gray-200">

            <button 
          onClick={() => decreaseQuantity(item.id)}
            className='w-10 flex justify-center text-gray-400 hover:text-green-700'>

                <Minus size={14} />
            </button>

            <span className="w-8 text-center text-sm">
                {item.quantity}
            </span>

            <button 
             onClick={() => increaseQuantity(item.id)}
            className='w-10 flex justify-center text-gray-400 hover:text-green-700'>
                <Plus size={14} />
            </button>

        </div>
    )
}

export default ProductQuantity