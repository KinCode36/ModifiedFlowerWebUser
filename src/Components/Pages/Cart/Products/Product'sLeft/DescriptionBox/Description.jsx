import React from 'react'
import ProductList from '../ProductList/ListTop/ProductList'
import Bottom from '../ProductList/ListBottom/Bottom'

const Description = ({ cart }) => {
  return (
    <div className='py-6 px-8 bg-white rounded-lg shadow-sm border border-gray-100'>
      <ProductList cart={cart} />
      <Bottom />
    </div>
  )
}

export default Description