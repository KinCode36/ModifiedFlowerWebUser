import React from 'react'
import Head from './Head'
import Cards from './Cards'
import { bouquetData } from '../../../../utils/demo'

const Section2 = ({ addToCart,
  addToWishlist,
  wishlist,
  cart,
  increaseQuantity,
  decreaseQuantity }) => {
  const bouquet = bouquetData

  return (
    <div className='bg-[#F7F4EE] pt-8 sm:pt-10 px-3 sm:px-6 lg:px-10'>
      <Head />
      <div>
        <Cards bouquet={bouquet.slice(0, 4)} addToWishlist={addToWishlist} wishlist={wishlist} addToCart={addToCart} cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity} />
      </div>
    </div>
  )
}

export default Section2