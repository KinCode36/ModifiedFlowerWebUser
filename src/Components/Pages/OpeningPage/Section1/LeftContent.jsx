import React from 'react'
import { Link } from 'react-router-dom'

const LeftContent = () => {
    return (
        <div className='pt-6 lg:pt-[10%] w-full lg:w-1/3 pl-0 lg:pl-4'>
            <div className='font-serif font-semibold text-[11px] flex justify-start gap-3 px-4 text-[#A8C5AD] tracking-wide'>
             ✦ FRESH · SEASONAL · ARTISANAL
            </div>
            <div className='p-4 text-[#FFFFFF]'>
                <h1 className='text-4xl sm:text-5xl lg:text-5xl font-serif font-light leading-tight'>
                    Where Every <br />
                    <span className='text-[#E8BDB5]'>Bloom </span> 
                    Tells
                    <br />
                    a Story
                </h1>

                <p className='pt-2 font-serif text-[#ffffff8c] text-[15px] font-light mt-5'>
                    Hand-crafted floral arrangements delivered fresh to your door. From everyday bouquets to grand event decoration.
                </p>
            </div>
             <div className='p-4 flex flex-col sm:flex-row gap-3'>
                <Link to='/shop' className='bg-[#4A7A52] py-3 px-6 rounded-[8px] font-medium cursor-pointer hover:scale-90 duration-150 text-white transition-all text-sm'>Shop Flowers</Link>
                <Link to='/services' className='bg-transparent border-[#ffffff4d] border py-3 px-6 rounded-[8px] font-medium cursor-pointer hover:scale-90 duration-150 transition-all text-white text-sm'>Plan an Event</Link>
             </div>
        </div>
    )
}

export default LeftContent