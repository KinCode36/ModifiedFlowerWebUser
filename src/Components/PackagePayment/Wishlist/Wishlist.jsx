import React from 'react'
import Top from './Top/Top'
import SearchOption from './SearchOption/SearchOption'
import Main from './Main/Main'

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className='py-6 px-10 m-3 rounded-2xl border-3 border-[#050505] bg-[#7e9f7e]  overflow-auto '>
        <Top/>
        <SearchOption/>
        <Main wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
  )
}

export default Wishlist