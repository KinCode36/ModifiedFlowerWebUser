import React from 'react'
import Header from './Header'
import Feedback from './Feedback'
import { feedbackData } from '../../../../utils/demo'


const Section5 = () => {
  const feedback = feedbackData
  return (
    <div className='bg-[#EAF2EB] pb-10'>
          <Header/>
          <Feedback feedback={feedback}/>
    </div>
  )
}

export default Section5