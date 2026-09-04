import React from 'react'
import Login from "../../../assets/Login.png";
import Right from './Right';

const Left = ({handleLogin}) => {
  return (
    <div className='min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-40px)] w-full max-w-6xl border rounded-2xl bg-[#436856] overflow-hidden flex flex-col lg:flex-row relative'>

      {/* Left Image */}
      <div className='w-full h-56 sm:h-72 lg:h-auto lg:w-1/2 lg:min-h-full flex-shrink-0'>
        <img
          src={Login}
          alt="Login"
          className='h-full w-full object-cover object-left'
        />
      </div>
      {/* Right Form */}
      <div className='w-full lg:w-1/2 lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 px-4 sm:px-8 py-8 lg:py-0'>
      <Right handleLogin={handleLogin}/>
      </div>
    </div>
  )
}

export default Left