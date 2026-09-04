import React from 'react'
import Head from './Head'
import Cards from './Cards'
import { bouquetData } from '../../../../utils/demo'

const Section2 = () => {
const bouquet = bouquetData

  return (
    <div className='bg-[#F7F4EE] pt-8 sm:pt-10 px-3 sm:px-6 lg:px-10'>
      <Head/>
      <div>
      <Cards bouquet={bouquet.slice(0,4)}/>
      </div>
    </div>
  )
}

export default Section2