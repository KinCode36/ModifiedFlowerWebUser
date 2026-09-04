import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Section1 = () => {
  return (
    <div className='bg-[#2C2C2A] pt-20 sm:pt-24 lg:pt-[10%] pb-12 sm:pb-16 lg:pb-20 px-3 sm:px-5 lg:px-0'>
      <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 max-w-7xl mx-auto'> 
      <LeftContent/>
      <RightContent/>
      </div>
    </div>
  )
}

export default Section1