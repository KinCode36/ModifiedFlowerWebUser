import React from 'react'

const Feedback = ({feedback}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-8'>
            
            {feedback?.map((item) => (

            <div 
            key={item.id}
            className='bg-[#fff] border-[#E0DDD6] border p-5 sm:p-6 rounded-xl'>
                <div>
                    <h2 className='pb-2'>{item.rating}</h2>
                    <h4 className='text-[#2C2C2A] pb-3'>"{item.review}"</h4>
                </div>
                <div className='flex justify-start gap-3'>
                <div className='rounded-full h-10 w-10 flex justify-center items-center font-bold text-[white]'
                
                style={{backgroundColor:item.avatarColor}}
                >{item.avatar}
                </div>

                <div>
                    <h1 className='text-[#2C2C2A] font-medium text-sm'>{item.name}</h1>
                    <h2 className='text-[#7A7A76] text-[11px]'>{item.role}.{item.location}</h2>
                </div>
                </div>
            </div>
            ))}

        </div>
    )
}

export default Feedback