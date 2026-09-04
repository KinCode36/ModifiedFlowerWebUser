import React from 'react'
import { ArrowRight } from 'lucide-react'
const GoldPackage = () => {
    return (
        <div>
            <div className='bg-[#ffffff08] border-[#ffffff1a] border rounded-xl p-4 min-h-[480px] h-auto hover:bg-[#2C2C2C] border-[#6B8F71] cursor-pointer'>
                <div className='p-2 font-serif'>
                    <h2 className='text-[#ffffff66] text-[11px] font-semibold pb-1'>GOLD PACKAGE</h2>
                    <h1 className='text-[#fff] text-xl sm:text-2xl pt-1'>Luxe</h1>
                    <h3 className='text-[#ffffff73] text-sm'>Complete bespoke experience</h3>
                    <h1 className='font-semibold text-2xl text-[#E8BDB5] pt-4'>₹1,20,000</h1>
                    <h3 className='text-[#ffffff59] text-[11px]'>starting price · 30% deposit</h3>
                    <div className='pt-4'>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Unlimited guests
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Full venue transformation
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Custom floral installations
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Bridal party bouquets
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Dedicated coordinator
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                        <h2 className='text-[#ffffffa6] text-sm pb-2 pt-1'>
                            <span className='text-[#6B8F71] '>✓</span>
                            Same-day floral refresh
                        </h2>
                        <div className='h-0.25 bg-gray-600'></div>
                    </div>
                </div>
                <div className='pt-4 pb-10'>
                    <button className='flex justify-center rounded-[8px] border-[#ffffff33] border-[1.5px] py-2 w-full text-white'>Book Now<ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default GoldPackage