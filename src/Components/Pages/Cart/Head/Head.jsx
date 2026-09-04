import React from 'react'
import Beginning from './Beginning'
import Middle from './Middle'
import Last from './Last'

const Head = () => {
  return (
    <div className='flex justify-between items-center py-3 px-6'>
        <Beginning/>
        <Middle/>
        <Last/>
    </div>
  )
}

export default Head