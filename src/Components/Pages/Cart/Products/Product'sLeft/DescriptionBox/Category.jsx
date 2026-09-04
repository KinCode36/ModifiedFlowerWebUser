import React from 'react'

const Category = () => {
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-2'>
        <h2 className='text-sm font-medium'>Product</h2>
      </div>

      <div>
        <h2 className='text-sm font-medium'>Price</h2>
      </div>

      <div>
        <h2 className='text-sm font-medium'>Quantity</h2>
      </div>

      <div>
        <h2 className='text-sm font-medium'>SubTotal</h2>
      </div>
    </div>
  )
}

export default Category