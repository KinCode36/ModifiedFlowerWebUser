import React from 'react'
import Beginning from './Beginning'
import Last from './Last'

const Head = () => {
  return (
    <div className="flex justify-between px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
      <Beginning />
      <Last />
    </div>
  )
}

export default Head