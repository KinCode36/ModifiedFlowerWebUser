import React from 'react'
import ProductLeft from './Product\'sLeft/ProductLeft.jsx'
import ProductRight from './Product\'sRight/ProductRight.jsx'
import { orderSummary } from '../../../../utils/demo.jsx'
const Products = ({cart, removeFromCart, increaseQuantity, decreaseQuantity,}) => {

const summary = orderSummary
  
  return (
    <div className='flex gap-10 p-6'>
      <ProductLeft cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      <ProductRight summary={summary} cart = {cart}/>
    </div>
  )
}

export default Products