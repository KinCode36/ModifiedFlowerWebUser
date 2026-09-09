import React from 'react'
import Head from './Head/Head'
import Products from './Products/Products'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'


const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, }) => {
  return (
    <div className='mt-20 min-h-screen overflow-hidden'>
      <Head />
      <Products cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />

    </div>

  )
}

export default Cart