import React from 'react'
import Bottom from '../ListBottom/Bottom';
import Product from './Product';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductSubtotal from './ProductSubtotal';
import Category from '../../DescriptionBox/Category';

const ProductList = ({ cart, removeFromCart,  increaseQuantity, decreaseQuantity, }) => {

  return (
    <div className="w-full overflow-hidden">

      <Category/>

      {cart.map((item) => {
        return (

          <div
            key={item.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center py-8 border-b border-gray-100"
          >
            <Product item = {item} removeFromCart={removeFromCart}/>
            <ProductPrice item = {item}/>
            <ProductQuantity item = {item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            <ProductSubtotal item = {item}/>

          </div>

        )
      })}
    </div>
  )
}

export default ProductList