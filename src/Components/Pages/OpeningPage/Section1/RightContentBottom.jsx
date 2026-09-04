import React from 'react'

const RightContentBottom = () => {
  return (
    <div className='p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6'>
        {/* Box1 */}
        <div className='border-[#ffffff1a] bg-[#ffffff0d] border rounded-[6px] py-5 px-4'>
            <h1 className='font-serif text-[#E8BDB5] flex justify-center items-center text-2xl font-light'>2,400+</h1>
            <p className='flex justify-center items-center text-[#FFFFFF66]'>Happy Customers</p>
        </div>

        {/* Box2 */}
         <div className='border-[#ffffff1a] bg-[#ffffff0d] border rounded-[6px] py-5 px-4'>
            <h1 className='font-serif text-[#E8BDB5] flex justify-center items-center text-2xl font-light'>350+</h1>
            <p className='flex justify-center items-center text-[#FFFFFF66]'>Event Decorated</p>
        </div>

        {/* Box3 */}
         <div className='border-[#ffffff1a] bg-[#ffffff0d] border rounded-[6px] py-5 px-4'>
            <h1 className='font-serif text-[#E8BDB5] flex justify-center items-center text-2xl font-light'>4.9★</h1>
            <p className='flex justify-center items-center text-[#FFFFFF66]'>Total Ratings</p>
        </div>
    </div>
  )
}

export default RightContentBottom