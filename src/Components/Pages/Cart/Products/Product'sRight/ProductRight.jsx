import React from 'react'
import CheckOutButton from './CheckoutButton/CheckOutButton'
import ProductSummary from './ProductSummary/ProductSummary'

const ProductRight = ({ summary, cart }) => {
  return (
    <div className="w-full lg:w-1/4 h-fit py-6 px-5 sm:px-8 bg-white rounded-lg shadow-sm border border-gray-100">

<<<<<<< HEAD
        <ProductSummary summary = {summary} cart = {cart}/>
 
        {/* CheckOut */}
=======
      {/* ProductSummary */}

      <ProductSummary summary={summary} />

      {/* CheckOut */}

      <CheckOutButton />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b

    </div>
  )
}

export default ProductRight