import React from 'react'
import CheckOutButton from './CheckoutButton/CheckOutButton'
import ProductSummary from './ProductSummary/ProductSummary'

const ProductRight = ({ summary, cart }) => {
  return (
    <div className='w-1/4 h-fit py-6 px-8 bg-white rounded-lg shadow-sm border  border-gray-100'>
      
        {/* ProductSummary */}

        <ProductSummary summary = {summary} cart = {cart}/>
 
        {/* CheckOut */}

        <CheckOutButton/>
        
    </div>
  )
}

export default ProductRight