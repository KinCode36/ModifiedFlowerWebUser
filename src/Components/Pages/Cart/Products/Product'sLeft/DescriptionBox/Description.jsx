import React from 'react'
import ProductList from '../ProductList/ListTop/ProductList'
import Bottom from '../ProductList/ListBottom/Bottom'

const Description = ({cart, removeFromCart,  increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className=' py-6 px-8 bg-white rounded-lg shadow-sm border border-gray-100'>
        <ProductList cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
        <Bottom/>
    </div>
  )
}

export default Description