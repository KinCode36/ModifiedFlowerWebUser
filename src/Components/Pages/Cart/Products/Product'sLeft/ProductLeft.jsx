import React from 'react'
import DescriptionBox from './DescriptionBox/DescriptionBox'

const ProductLeft = ({cart, removeFromCart,  increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className='w-2/3'>
        <DescriptionBox cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  )
}

export default ProductLeft