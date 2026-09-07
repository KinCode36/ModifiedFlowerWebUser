import React from 'react'
import Product from './Product'
import ProductPrice from './ProductPrice'
import ProductQuantity from './ProductQuantity'
import ProductSubtotal from './ProductSubtotal'
import Category from '../../DescriptionBox/Category'

<<<<<<< HEAD
const ProductList = ({ cart, removeFromCart,  increaseQuantity, decreaseQuantity, }) => {

=======
const ProductList = ({ cart }) => {
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[650px]">
        <Category />

        {cart?.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b border-gray-100 py-8"
          >
<<<<<<< HEAD
            <Product item = {item} removeFromCart={removeFromCart}/>
            <ProductPrice item = {item}/>
            <ProductQuantity item = {item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            <ProductSubtotal item = {item}/>

=======
            <Product item={item} />
            <ProductPrice item={item} />
            <ProductQuantity item={item} />
            <ProductSubtotal item={item} />
>>>>>>> 5fee06513e37be9d17a9e10deeeb81d3aad2bb2b
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList