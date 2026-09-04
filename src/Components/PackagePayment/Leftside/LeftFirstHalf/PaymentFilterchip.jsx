import React from 'react'
import { CreditCard, BadgeIndianRupee, Landmark } from 'lucide-react';

const PaymentFilterchip = () => {
    return (
        <div className='py-7  flex justify-start gap-3'>
            <button className='cursor-pointer py-1.5 px-3 rounded-[11px] border font-medium text-sm bg-white text-[#2E5235] flex justify-center items-center gap-1'><CreditCard /> Cards</button>
            <button className='cursor-pointer py-1.5 px-3 rounded-[11px] border font-medium text-sm bg-white text-[#2E5235] flex justify-center items-center gap-1'><BadgeIndianRupee /> UPI</button>
            <button className='cursor-pointer py-1.5 px-3 rounded-[11px] border font-medium text-sm bg-white text-[#2E5235] flex justify-center items-center gap-1'><Landmark /> Net Banking</button>
        </div>
    )
}

export default PaymentFilterchip