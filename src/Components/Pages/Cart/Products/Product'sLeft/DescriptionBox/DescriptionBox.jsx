import React from 'react'
import Description from './Description'

<<<<<<< HEAD
const DescriptionBox = ({cart, removeFromCart,  increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className=''>
        <Description cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
=======
const DescriptionBox = ({ cart }) => {
  return (
    <div>
      <Description cart={cart} />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
    </div>
  )
}

export default DescriptionBox