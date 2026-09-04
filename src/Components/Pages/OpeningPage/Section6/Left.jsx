import React from 'react'

const Left = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-16 pr-0 lg:pr-8'>

        {/* First */}
         <div>
            <h1 className='text-[#ffffff59] font-semibold pb-2 text-[11px]'>SHOP</h1>
            <ul>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>All Flowers</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Bouquets</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Single Stems</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Seasonal</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Premium</li>
            </ul>
         </div>

         {/* Second */}
         <div>
            <h1 className='text-[#ffffff59] font-semibold pb-2 text-[11px]'>SERVICES</h1>
            <ul>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Wedding Decor</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Corporate Events</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Birthdays</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Book an Event</li>
            </ul>
         </div>

         {/* Third */}
         <div>
            <h1 className='text-[#ffffff59] font-semibold pb-2 text-[11px]'>SUPPORT</h1>
            <ul>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Track Order</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Returns Policy</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>FAQ</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>Contact Us</li>
                <li className='text-[#ffffff80] pb-1 font-medium text-[13px]'>WhatsAap</li> 
            </ul>
         </div>
    </div>
  )
}

export default Left