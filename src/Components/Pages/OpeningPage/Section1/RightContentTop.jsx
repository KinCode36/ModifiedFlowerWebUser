import React from 'react'

const RightContentTop = () => {
  return (
    <div className='w-full '>
        <div className='grid grid-cols-2 p-0 sm:p-2 gap-2'>
        {/* Card1 */}
        <div className=' bg-gradient-to-br from-[#FAF0EE] to-[#E8BDB5] h-40 sm:h-56 lg:h-[300px] rounded-xl relative'>
          <div className='flex justify-center items-center  h-full w-full'>
            <img src="https://png.pngtree.com/png-clipart/20241129/original/pngtree-pink-rose-flower-png-image_17408230.png" alt="Rose"
              className=' h-30 w-30'
            />
          </div>
          <div className='absolute left-2 right-2 bottom-2'>
            <h1 className='bg-[#00000059] text-[14px] rounded-[4px] w-full p-1'>Rose Bouquets</h1>
          </div>
        </div>

        {/* Card2 */}
        <div className=' bg-gradient-to-br from-[#FFFBEE] to-[#FFF0D0] h-40 sm:h-56 lg:h-[300px] rounded-xl relative'>
          <div className='flex justify-center items-center h-full w-full'>
            <img src="https://png.pngtree.com/png-clipart/20210530/original/pngtree-sunflower-landscape-yellow-flower-flower-png-image_6342830.png" alt="Sunflower"
              className=' h-30 w-30'
            />
          </div>
          <div className='absolute left-2 right-2 bottom-2'>
            <h1 className='bg-[#00000059] text-[14px] rounded-[4px] w-full p-1'>Sunflowers</h1>
          </div>
        </div>

        {/* Card3 */}
        <div className=' bg-gradient-to-br from-[#F5F0FF] to-[#EEF2FF] h-40 sm:h-56 lg:h-[300px] rounded-xl relative'>
          <div className='flex justify-center items-center  h-full w-full'>
            <img src="https://png.pngtree.com/png-clipart/20231004/original/pngtree-white-lily-flower-png-image_13097547.png" alt="Lilies"
              className=' h-30 w-30'
            />
          </div>
          <div className='absolute left-2 right-2 bottom-2'>
            <h1 className='bg-[#00000059] text-[14px] rounded-[4px] w-full p-1'>Lilies & Orchids</h1>
          </div>
        </div>

        {/* Card4 */}
        <div className=' bg-gradient-to-br from-[#EAF2EB] to-[#D0E8D4] h-40 sm:h-56 lg:h-[300px] rounded-xl relative'>
          <div className='flex justify-center items-center h-full w-full'>
            <img src="https://static.vecteezy.com/system/resources/previews/070/058/259/non_2x/vibrant-mixed-flower-bouquet-featuring-diverse-colors-and-textures-on-transparent-background-free-png.png" alt="Rose"
              className=' h-30 w-30'
            />
          </div>
          <div className='absolute left-2 right-2 bottom-2'>
            <h1 className='bg-[#00000059] text-[14px] rounded-[4px] w-full p-1'>Mixed Bundles</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContentTop