import { div } from 'motion/react-client'
import React from 'react'

const ProductSummary = ({ summary, cart }) => {
  return (
    <div>

      {cart.map((item => {
        return(

          <div key={item.id}>
          <div className='flex justify-between items-center'>

            <p className='text-lg py-1 font-noraml text-green-700 '>Subtotal</p>
            <p>₹{item.price * item.quantity}</p>
          </div>

          <div className='flex justify-between items-center'>

            <p className='text-lg py-1 font-noraml text-green-700 '>Discount</p>
            <p className='text-green-700 '>{summary.discount}%</p>
          </div>

          <div className='flex justify-between items-center'>

            <p className='text-lg py-1 font-noraml text-green-700 '>Shipping</p>
            <p className='text-green-700 '>{summary.shipping}</p>
          </div>

          <div className='flex justify-between items-center'>

            <p className='text-lg py-1 font-normal text-green-700 '>Total</p>
            <p>{summary.total}</p>
          </div>
        </div>
        )
      }))}
    </div>
  )
}

export default ProductSummary