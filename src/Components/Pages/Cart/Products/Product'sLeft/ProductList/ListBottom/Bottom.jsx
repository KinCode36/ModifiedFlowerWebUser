import React from 'react'

const Bottom = () => {
  return (
    <div className="flex items-center justify-between gap-5 p-5">

      {/* Coupon */}
      <div className="flex items-center gap-3">

        <input type="text" placeholder='Coupon Code'
          className='w-[260px] h-[45px] px-4 bg-gray-50 border border-gray-100 rounded-md outline-none text-sm'
        />

        <button className="h-[45px] px-7 bg-green-700 hover:bg-green-800 text-white rounded-md text-sm font-semibold transition">
          Apply Coupon Code
        </button>
      </div>

      {/* Update */}
      <div>
        <button className='h-[45px] px-7 bg-green-50 hover:bg-green-100 text-green-700 rounded-md text-sm font-semibold transition'>
          Update cart
        </button>
      </div>

    </div>
  )
}

export default Bottom