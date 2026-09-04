import React from 'react'
import Upper from './Upper'
import PackageCard from '../OpeningPage/Section3/PackageCard'
import OurPackage from './OurPackage'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'

const ServicesPage = () => {
  return (
    <div className='bg-[#2C2C2A] pt-24 sm:pt-[10%] font-serif overflow-hidden'>
      <Upper />
      <OurPackage />
      <PackageCard />
      <EntireFooter />
    </div>
  )
}

export default ServicesPage