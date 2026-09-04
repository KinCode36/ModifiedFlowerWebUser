import React from 'react'

const Filterchips2 = ({
  selectedCategory,
  setSelectedCategory
}) => {

  const categories = [
    "All",
    "Wedding",
    "Corporate",
    "Birthday",
    "Engagement",
    "Anniversary"
  ]

  return (
    <div className='pt-5 sm:pt-7 px-4 sm:px-10 flex flex-wrap justify-start gap-2 sm:gap-3'>

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`cursor-pointer py-1.5 px-3 rounded-[20px] border font-medium text-sm transition-all duration-200
            ${
              selectedCategory === category
                ? 'bg-[#2E5235] text-white border-[#2E5235]'
                : 'bg-white text-[#2E5235] hover:bg-[#E8F0E9]'
            }
          `}
        >
          {category}
        </button>

      ))}

    </div>
  )
}

export default Filterchips2