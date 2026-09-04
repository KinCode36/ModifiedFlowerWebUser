import React from 'react'

const ProductPrice = ({item}) => {
    return (
        <div>
            <h1 className='text-sm text-gray-700 font-medium'>
                ₹{item.price}
            </h1>
        </div>
    )
}

export default ProductPrice