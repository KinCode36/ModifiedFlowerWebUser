import React from 'react'
import Right from './Right'
import Left from './Left'

const FooterDescription = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4'>
        <Right/>
        <Left/>
    </div>
  )
}

export default FooterDescription