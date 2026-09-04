import React from 'react'
import RightContentTop from './RightContentTop'
import RightContentBottom from './RightContentBottom'

const RightContent = () => {
  return (
    <div className='w-full lg:w-1/2'>
      <RightContentTop/>
      <RightContentBottom/>
    </div>
  )
}

export default RightContent