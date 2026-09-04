import React from 'react'
import Category from './Category'
import ProductList from '../ProductList/ListTop/ProductList'
import { cartData } from '../../../../../../utils/demo'
import Bottom from '../ProductList/ListBottom/Bottom'

const Description = () => {
  const cart = cartData
  return (
    <div className=' py-6 px-8 bg-white rounded-lg shadow-sm border border-gray-100'>
        <ProductList cart = {cart.slice(0-3)}/>
        <Bottom/>
    </div>
  )
}

export default Description