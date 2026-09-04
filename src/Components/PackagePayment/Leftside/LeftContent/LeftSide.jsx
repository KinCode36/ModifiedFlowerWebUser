import React from 'react'
import LeftTop from './LeftTop'
import LeftFirstHalf from '../LeftFirstHalf/LeftFirstHalf'
import LeftSecondHalf from '../LeftSecondHalf/LeftSecondHalf'

const LeftSide = () => {
  return (
    <div className='w-[60%] bg-[#F1F1F1] h-screen'>
        <LeftTop/>
        <div className='flex justify-between items-center'>
        <LeftFirstHalf/>
        <LeftSecondHalf/>
        </div>
    </div>
  )
}

export default LeftSide