import React from 'react'
import BronzePackage from './BronzePackage'
import SilverPackage from './SilverPackage'
import GoldPackage from './GoldPackage'
const PackageCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto'>
            <BronzePackage />
            <SilverPackage />
            <GoldPackage />
        </div>
    )
}

export default PackageCard