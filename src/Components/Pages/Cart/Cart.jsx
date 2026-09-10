import React from 'react'
import Head from './Head/Head'
import Products from './Products/Products'


const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity, }) => {
  return (
    <div className='lg:mt-20 min-h-screen overflow-hidden mt-12'>
      <Head />
      <Products cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />

    </div>

  )
}

export default Cart