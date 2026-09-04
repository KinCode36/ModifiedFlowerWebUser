import { style } from 'motion/react-client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Right = ({handleLogin}) => {

  const [Email, setEmail] = useState('')
  const [Otp, setOtp] = useState('')
  const [Task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(Email, Otp)
    
    setEmail('')
    setOtp('')
  }
  const [Color, setColor] = useState('text-black')

  const changeColor = () => {
    setColor("text-sky-400");
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <form className='w-full max-w-lg flex flex-col gap-4 sm:gap-5 shadow-[0_10px_30px_rgba(20,50,38,0.35)] p-5 sm:p-8 lg:p-10 rounded-xl'
        onSubmit={(e) => {
          submitHandler(e)
        }}
      >
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white py-3 flex items-center justify-center'>Login</h1>
        <input type="email" placeholder='Enter your email'
        
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className='py-3 px-4 sm:px-6 bg-[#F7ECEA] placeholder:text-[#3D2928]/20 font-medium text-base sm:text-lg lg:text-2xl rounded-lg border-none w-full outline-none'
        />
        <input type="one time password" placeholder='Enter Otp'
          value={Otp}
          onChange={(e) => {
            setOtp(e.target.value)
          }}
          className='py-2 px-6 bg-[#F7ECEA] placeholder:text-[#3D2928]/20 font-medium text-2xl rounded-lg border-none'
        />
        <button className=' py-2 px-5 rounded-xl border bg-[#8FB89F] cursor-pointer active:scale-95 text-lg font-bold'>Login</button>
        <div className=' active:underline text-lg flex justify-end cursor-pointer'
          
        >
          <Link to='/signup'className={Color}
          onClick={changeColor}
          >Don't have an account?</Link>
        </div>
      </form>

    </div>
  )
}

export default Right