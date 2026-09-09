import React from 'react'

const ProductSummary = ({ cart, summary }) => {

  // Calculate subtotal of all products
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const discountPercent = summary?.discount || 0

  const discountAmount = (subtotal * discountPercent) / 100


  const shipping =
    summary?.shipping === "Free"
      ? 0
      : Number(summary?.shipping) || 0

  const total = subtotal - discountAmount + shipping

  return (
    <div>

      <div className="flex justify-between items-center">
        <p className="text-lg py-1 font-normal text-green-700">
          Subtotal
        </p>

        <p>₹{subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg py-1 font-normal text-green-700">
          Discount
        </p>

        <p className="text-green-700">
          {discountPercent}%
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg py-1 font-normal text-green-700">
          Shipping
        </p>

        <p className="text-green-700">
          {summary?.shipping || "Free"}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg py-1 font-normal text-green-700">
          Total
        </p>

        <p>
          ₹{total.toFixed(2)}
        </p>
      </div>

    </div>
  )
}

export default ProductSummary