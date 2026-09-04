import React from 'react'
import FooterDescription from './FooterDescription'
import FooterCopy from './FooterCopy'
import Line from './Line'

const EntireFooter = () => {
  return (
    <div className='bg-[#2C2C2A] px-4 sm:px-8 py-10 sm:py-15 w-full'>
        <FooterDescription/>
        <Line/>
        <FooterCopy/>
        
    </div>
  )
}

export default EntireFooter