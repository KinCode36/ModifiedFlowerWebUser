import React from 'react'

const FilterChips = ({ activeStatus, setActiveStatus }) => {
  const filters = [
    'All',
    'Bouquets',
    'Single Stems',
    'Seasonal',
    'Premium',
  ]

  return (
    <div className="py-5 sm:py-7 px-4 sm:px-10 flex flex-wrap justify-start gap-2 sm:gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveStatus(filter)}
          className={`cursor-pointer py-1.5 px-3 rounded-[20px] border font-medium text-sm transition-all duration-200
            ${
              activeStatus === filter
                ? 'bg-[#2E5235] text-white border-[#2E5235]'
                : 'bg-white text-[#2E5235] border-gray-300 hover:bg-[#E8EFE9]'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterChips