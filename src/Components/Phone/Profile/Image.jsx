import React from 'react'
const Image = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className='rounded-full h-28 w-28 sm:h-40 sm:w-40 border '>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" alt=""
                    className='h-28 w-28 sm:h-40 sm:w-40 rounded-full object-cover cursor-pointer'
                />
                
                <div className='py-4 text-center flex justify-center items-center font-bold text-xl'>
                    <h1 className=''>Khushi Sharma</h1>
                </div>
            </div>
        </div>
    )
}

export default Image