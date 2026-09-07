import React from 'react'

const RightContentBottom = () => {
  return (
    <div className="p-2 sm:p-4 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">

      {/* Box 1 */}
      <div className="border-[#ffffff1a] bg-[#ffffff0d] border rounded-[6px] py-2 px-1 sm:py-4 sm:px-2 lg:px-4">
        <h1 className="font-serif text-[#E8BDB5] flex justify-center items-center text-sm sm:text-lg lg:text-2xl font-light">
          2,400+
        </h1>
        <p className="flex justify-center items-center text-[#FFFFFF66] text-[8px] sm:text-[10px] lg:text-sm text-center">
          Happy Customers
        </p>
      </div>

      {/* Box 2 */}
      <div className="border-[#ffffff1a] bg-[#ffffff0d] border rounded-[6px] py-2 px-1 sm:py-4 sm:px-2 lg:px-4">
        <h1 className="font-serif text-[#E8BDB5] flex justify-center items-center text-sm sm:text-lg lg:text-2xl font-light">
          350+
        </h1>
        <p className="flex justify-center items-center text-[#FFFFFF66] text-[8px] sm:text-[10px] lg:text-sm text-center">
          Events Decorated
        </p>
      </div>

      {/* Box 3 */}
      <div className="border-[#ffffff1a] bg-[#ffffff0d] border rounded-[6px] py-2 px-1 sm:py-4 sm:px-2 lg:px-4">
        <h1 className="font-serif text-[#E8BDB5] flex justify-center items-center text-sm sm:text-lg lg:text-2xl font-light">
          4.9★
        </h1>
        <p className="flex justify-center items-center text-[#FFFFFF66] text-[8px] sm:text-[10px] lg:text-sm text-center">
          Total Ratings
        </p>
      </div>

    </div>
  )
}

export default RightContentBottom