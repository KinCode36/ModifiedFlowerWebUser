import React from 'react'
import ProductLeft from './Product\'sLeft/ProductLeft.jsx'
import ProductRight from './Product\'sRight/ProductRight.jsx'
import { orderSummary } from '../../../../utils/demo.jsx'
<<<<<<< HEAD
const Products = ({cart, removeFromCart, increaseQuantity, decreaseQuantity,}) => {
=======
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b

const Products = ({ cart }) => {
  const summary = orderSummary

  return (
    <div className='flex gap-10 p-6'>
<<<<<<< HEAD
      <ProductLeft cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      <ProductRight summary={summary} cart = {cart}/>
=======
      <ProductLeft cart={cart} />
      <ProductRight summary={summary} />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
    </div>
  )
}

export default Products