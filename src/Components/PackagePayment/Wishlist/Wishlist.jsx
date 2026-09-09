import React from 'react'
import Top from './Top/Top'
import SearchOption from './SearchOption/SearchOption'
import Main from './Main/Main'

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className='my-20 px-10 m-3 rounded-2xl border-3 border-[#050505]  overflow-auto '>
        <Top/>
        <SearchOption/>
        <Main wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
  )
}

export default Wishlist