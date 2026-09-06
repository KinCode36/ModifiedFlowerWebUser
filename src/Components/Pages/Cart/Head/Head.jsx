import React from 'react'
import Beginning from './Beginning'
import Middle from './Middle'
import Last from './Last'

const Head = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
      <Beginning />
      {/* <Middle /> */}
      {/* <Last /> */}
    </div>
  )
}

export default Head