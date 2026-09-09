import React from 'react'
import ProductLeft from "./Product'sLeft/ProductLeft.jsx"
import ProductRight from "./Product'sRight/ProductRight.jsx"
import { orderSummary } from '../../../../utils/demo.jsx'
import { Link } from 'react-router-dom'

const Products = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {


  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[55vh] px-4">
        <div className="text-center">

          <div className="text-6xl mb-5">
            🛒
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link to="/shop" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Continue Shopping
          </Link>

        </div>
      </div>
    )
  }

  const summary = orderSummary

  return (
    <div className="flex  gap-10 p-6">

      <ProductLeft
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <ProductRight
        cart={cart}
        summary={summary}
      />

    </div>
  )
}

export default Products