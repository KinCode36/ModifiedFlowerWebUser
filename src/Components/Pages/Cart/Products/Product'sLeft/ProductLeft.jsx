import React from 'react'
import DescriptionBox from './DescriptionBox/DescriptionBox'

<<<<<<< HEAD
const ProductLeft = ({cart, removeFromCart,  increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className='w-2/3'>
        <DescriptionBox cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
=======
const ProductLeft = ({ cart }) => {
  return (
    <div className="w-full lg:w-2/3">
      <DescriptionBox cart={cart} />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
    </div>
  )
}

export default ProductLeft