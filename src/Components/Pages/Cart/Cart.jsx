import React from 'react'
import Head from './Head/Head'
import Products from './Products/Products'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'

const Cart = ({ cart }) => {
  return (
    <div className='pt-[7%] min-h-screen overflow-hidden'>
      <Head />
      <Products cart={cart} />
      <EntireFooter />
    </div>
  )
}

export default Cart