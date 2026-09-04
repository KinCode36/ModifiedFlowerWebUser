import React from 'react'

const ProductSubtotal = ({item}) => {
    return (
        <div className='flex justify-center items-center'>
            <span>
                ₹{item.price * item.quantity}
            </span>
        </div>
    )
}

export default ProductSubtotal