import React, { useState } from 'react'
import EntireFooter from '../OpeningPage/Section6/EntireFooter'
import Portfolio from './Portfolio'
import Filterchips2 from './Filterchips2'
import Section4 from '../OpeningPage/Section4/Section4'

const GalleryPage = ({ bouquet }) => {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBouquets =
    selectedCategory === "All"
      ? bouquet
      : bouquet?.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase()
        )

  return (
    <div className='pt-24 sm:pt-[10%] bg-[#F7F4EE]'>

      <Portfolio bouquet={filteredBouquets} />

      <Filterchips2
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Section4 />

      <EntireFooter />

    </div>
  )
}

export default GalleryPage