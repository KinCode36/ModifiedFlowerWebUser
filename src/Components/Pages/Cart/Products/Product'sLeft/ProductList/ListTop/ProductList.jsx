import React from 'react'
import Product from './Product'
import ProductPrice from './ProductPrice'
import ProductQuantity from './ProductQuantity'
import ProductSubtotal from './ProductSubtotal'
import Category from '../../DescriptionBox/Category'

const ProductList = ({ cart, removeFromCart,  increaseQuantity, decreaseQuantity, }) => {

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[650px]">
        <Category />

        {cart?.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b border-gray-100 py-8"
          >
            <Product item = {item} removeFromCart={removeFromCart}/>
            <ProductPrice item = {item}/>
            <ProductQuantity item = {item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            <ProductSubtotal item = {item}/>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList