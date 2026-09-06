import React from 'react'

const Bottom = () => {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Coupon */}
      <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
        <input
          type="text"
          placeholder="Coupon Code"
          className="h-[45px] w-full rounded-md border border-gray-100 bg-gray-50 px-4 text-sm outline-none sm:w-[260px]"
        />

        <button className="h-[45px] w-full rounded-md bg-green-700 px-5 text-sm font-semibold text-white transition hover:bg-green-800 sm:w-auto sm:px-7">
          Apply Coupon Code
        </button>
      </div>

      {/* Update */}
      <button className="h-[45px] w-full rounded-md bg-green-50 px-5 text-sm font-semibold text-green-700 transition hover:bg-green-100 sm:w-auto sm:px-7">
        Update cart
      </button>

    </div>
  )
}

export default Bottom