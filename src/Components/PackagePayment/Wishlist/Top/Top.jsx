import React from 'react'
import Arrow from './Arrow'
import Bag from './Bag'
import Heading from './Heading'

const Top = () => {
  return (
    <div className='flex justify-between items-center'>
      <Arrow/>
      <Heading/>
      <Bag/>
    </div>
  )
}

export default Top