import React, { useState } from 'react'
import Head1 from './Head1'
import FilterChips from './FilterChips'
import Cards from '../OpeningPage/Section2/Cards'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'
import { bouquetData } from '../../../utils/demo'

const ShoppingPage = ({ addToCart, addToWishlist, wishlist }) => {
  const [activeStatus, setActiveStatus] = useState('All')

  const filteredBouquets =
    activeStatus === 'All'
      ? bouquetData
      : bouquetData.filter(
        (item) =>
          item.category.toLowerCase() === activeStatus.toLowerCase()
      )

  return (
    <div className="bg-[#F7F4EE] font-serif min-h-screen px-2">
      <Head1 productCount={filteredBouquets.length} />

      <FilterChips
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />

      <Cards
        addToCart={addToCart}
        bouquet={filteredBouquets}
        addToWishlist={addToWishlist}
        wishlist={wishlist}
      />

      <EntireFooter />
    </div>
  )
}

export default ShoppingPage