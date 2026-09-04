import React from 'react'
import SavedCards from './SavedCards';
import PaymentFilterchip from './PaymentFilterchip';
import { cards } from '../../../../utils/demo';
const LeftFirstHalf = () => {
    const Cards = cards
    return (
        <div className='px-10 '>
            <h1 className='text-xl font-medium'>Choose a payment method</h1>
            <PaymentFilterchip/>
            <SavedCards Cards={cards}/>
        </div>
    )
}

export default LeftFirstHalf