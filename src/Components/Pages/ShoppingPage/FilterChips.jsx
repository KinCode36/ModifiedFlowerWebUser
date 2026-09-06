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
    <div className='w-full mt-4 overflow-hidden'>
    <div className="flex gap-2 p-1 rounded-lg  overflow-x-auto scrollbar-hide">
      {filters.map((filter) => (
        <button
   
          key={filter}
          onClick={() => setActiveStatus(filter)}
          className={`shrink-0 py-1.5 px-3.5 rounded-[20px] border border-[#E0DDD6] text-[12px] font-medium cursor-pointer font-dm whitespace-nowrap transition-all duration-150 
            ${
              activeStatus === filter
              ? 'bg-white border border-black text-[#2C2C2A] shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
              : 'text-[#7A7A76]'
            }`}
            >
          {filter}
        </button>
      ))}
    </div>
      </div>
  )
}

export default FilterChips