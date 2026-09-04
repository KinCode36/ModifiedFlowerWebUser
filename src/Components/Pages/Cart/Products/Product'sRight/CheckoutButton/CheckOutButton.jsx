import React from 'react'

const CheckOutButton = () => {
    return (
        <div className='flex justify-center items-center py-6 '>
            <button className='h-[55px] w-full px-7 bg-green-700 hover:bg-green-800 text-white rounded-md text-lg font-semibold transition'>
                Proceed To Checkout
            </button>
        </div>
    )
}

export default CheckOutButton