import React from 'react'
import Description from './Description'

const DescriptionBox = ({cart, removeFromCart,  increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className=''>
        <Description cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  )
}

export default DescriptionBox