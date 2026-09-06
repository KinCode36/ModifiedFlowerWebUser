import React from 'react'
import DescriptionBox from './DescriptionBox/DescriptionBox'

const ProductLeft = ({ cart }) => {
  return (
    <div className="w-full lg:w-2/3">
      <DescriptionBox cart={cart} />
    </div>
  )
}

export default ProductLeft