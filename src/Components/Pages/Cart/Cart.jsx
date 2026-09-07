import React from 'react'
import Head from './Head/Head'
import Products from './Products/Products'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'

<<<<<<< HEAD
const Cart = ({cart, removeFromCart, increaseQuantity, decreaseQuantity,}) => {
  return (
    <div className='pt-[7%] min-h-screen overflow-hidden'>
      <Head/>
      <Products cart = {cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      <EntireFooter/>
=======
const Cart = ({ cart }) => {
  return (
    <div className='pt-[7%] min-h-screen overflow-hidden'>
      <Head />
      <Products cart={cart} />
      <EntireFooter />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
    </div>
  )
}

export default Cart