import React, { useState } from 'react'
import CardLogo from './CardLogo';

const SavedCards = ({Cards}) => {

    const [selectedCard, setSelectedCard] = useState(null);


    return (
        <div className="w-[400px] font-sans text-[#222]">

            {/* Heading */}
            <h2 className="mb-[18px] text-lg font-semibold">
                Choose a card
            </h2>

            {/* Saved Cards */}
            <div className="flex flex-col gap-2">

                {Cards.map((card) => (
                    <label
                        key={card.id}
                        className={`
              relative flex min-h-[56px] w-full cursor-pointer
              items-center rounded-[7px] border
              bg-white px-[14px] py-[10px]
              transition-all duration-150
              ${selectedCard === card.id
                                ? "border-blue-600 shadow-[0_0_0_1px_#2563eb]"
                                : "border-[#dedede] hover:border-[#bdbdbd]"
                            }
            `}
                    >

                        {/* Radio Input */}
                        <input
                            type="radio"
                            name="payment-card"
                            value={card.id}
                            checked={selectedCard === card.id}
                            onChange={() => setSelectedCard(card.id)}
                            className="sr-only"
                        />

                        {/* Custom Radio */}
                        <div
                            className={`
                mr-[22px] h-[15px] w-[15px] shrink-0 rounded-full border
                ${selectedCard === card.id
                                    ? "border-[4px] border-blue-600"
                                    : "border-[#d8d8d8]"
                                }
              `}
                        />

                        {/* Card Details */}
                        <div className="flex min-w-0 flex-1 flex-col">

                            {/* Card Name */}
                            <div className="mb-[3px] truncate text-sm font-semibold">
                                {card.name}
                            </div>

                            {/* Card Number + Expiry */}
                            <div className="text-[9px] text-[#8a8a8a]">
                                {card.number} • {card.expiry}
                            </div>

                        </div>

                        {/* Card Logo */}
                        <CardLogo type={card.type} />

                    </label>
                ))}

            </div>

            {/* Add New Card Button */}
            <button
                type="button"
                className="
          mt-[13px] flex h-[40px] w-full
          items-center gap-[15px]
          rounded-[6px]
          border-[1.5px] border-blue-600
          bg-white px-[14px]
          text-[11px] text-[#222]
          transition-colors
          hover:bg-blue-50
        "
            >
                <span className="text-[18px] font-light leading-none">
                    +
                </span>

                <span>Add a new card</span>
            </button>

        </div>
    );
};

export default SavedCards;