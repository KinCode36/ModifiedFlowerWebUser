import React from 'react'
import Head from './Head/Head'
import Products from './Products/Products'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'

const Cart = () => {
  return (
    <div className='pt-[7%] min-h-screen overflow-hidden'>
      <Head/>
      <Products/>
      <EntireFooter/>
    </div>
  )
}

export default Cart