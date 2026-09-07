import React from 'react'
import ProductList from '../ProductList/ListTop/ProductList'
import Bottom from '../ProductList/ListBottom/Bottom'

<<<<<<< HEAD
const Description = ({cart, removeFromCart,  increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className=' py-6 px-8 bg-white rounded-lg shadow-sm border border-gray-100'>
        <ProductList cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
        <Bottom/>
=======
const Description = ({ cart }) => {
  return (
    <div className='py-6 px-8 bg-white rounded-lg shadow-sm border border-gray-100'>
      <ProductList cart={cart} />
      <Bottom />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
    </div>
  )
}

export default Description