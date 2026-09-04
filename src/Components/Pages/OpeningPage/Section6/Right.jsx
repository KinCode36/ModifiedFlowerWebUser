import React from 'react'

const Right = () => {
  return (
    <div className='font-serif pl-0 lg:pl-8 w-full lg:w-2/3'>
        <div>
        <h1 className='text-[#E8BDB5] font-normal text-2xl pb-4'>Floralia</h1>
        <p className='text-[#ffffff66] text-sm pb-6'>Handcrafted floral arrangements and event decoration services. Bringing nature's beauty to your most memorable moments.</p>
        </div>
        <div className='flex gap-3'>
            <button className='bg-[#ffffff0f] border border-[#ffffff1a] rounded-[8px] p-2 flex justify-center items-center'>📸</button>
            <button className='bg-[#ffffff0f] border border-[#ffffff1a] rounded-[8px] p-2 flex justify-center items-center'>🐦</button>
            <button className='bg-[#ffffff0f] border border-[#ffffff1a] rounded-[8px] p-2 flex justify-center items-center'>📘</button>
            <button className='bg-[#ffffff0f] border border-[#ffffff1a] rounded-[8px] p-2 flex justify-center items-center'>▶️</button>
        </div>
    </div>
  )
}

export default Right