import React from 'react'
import { ArrowRight } from 'lucide-react'
const SilverPackage = () => {
    return (
        <div>
            <div className='bg-[#ffffff08] border-[#6B8F71] border rounded-xl p-4 min-h-[480px] h-auto cursor-pointer relative '>
                <div className='p-2 font-serif'>
                    <h2 className='text-[#ffffff66] text-[11px] font-semibold pb-1'>SILVER PACKAGE</h2>
                    <h1 className='text-[#fff] text-2xl pt-1'>Opulent</h1>
                    <h3 className='text-[#ffffff73] text-sm'>Our most popular choice</h3>
                    <h1 className='font-semibold text-2xl text-[#E8BDB5] pt-4'>₹55,000</h1>
                    <h3 className='text-[#ffffff59] text-[11px]'>starting price · 30% deposit</h3>
                    <div className='pt-4'>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Up to 300 guests
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Full table arrangements
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Grand entrance arch
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Bridal bouquet included
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Ceremony + reception decor
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Post-event collection
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                    </div>

                </div>
                <div className='pt-4 pb-10'>
                    <button className='flex justify-center rounded-[8px] border-[#6B8F71] border-[1.5px] py-2 w-full bg-[#6B8F71] text-white cursor-pointer '>Book Now<ArrowRight /></button>
                </div>
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-200 rounded-xl px-4 py-1 border '>
                    <h1 className='text-[10px] felx justify-center items-center '>Most Popular</h1>
                </div>
            </div>
        </div>
    )
}

export default SilverPackage