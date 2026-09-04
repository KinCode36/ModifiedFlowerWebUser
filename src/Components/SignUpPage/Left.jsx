import React, { use, useState } from 'react'
import picture from "../../assets/picture.png"
import { Link } from 'react-router-dom'
const Left = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form submitted");
    setName('')
    setEmail('')
    setNumber('')

  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')


  return (
    <div className='bg-gradient-to-br from-[#E8C4DA] via-[#EFCFE4] to-[#F7E6F2] rounded-3xl py-6 sm:py-8 px-4 sm:px-8 w-full max-w-5xl flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 overflow-hidden'>
      <div className="rounded-2xl w-full max-w-md h-auto lg:h-100 pl-0 lg:pl-10 relative">
        <h1 className="text-3xl sm:text-4xl font-bold pb-4 flex justify-center items-center text-[#6D4A8F]">
          Sign Up
        </h1>

        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className="flex flex-col justify-center items-center gap-5">
          <div className="w-full max-w-80">
            <label className="block text-sm font-medium text-gray-700 mb-1">
            </label>
            <input
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full text-black text-lg font-semibold p-2 border-b outline-none focus:border-[#6D4A8F]"
            />
          </div>

          <div className="w-full max-w-80">
            <label className="block text-sm font-medium text-gray-700 mb-1">
             
            </label>
            <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full text-black text-lg font-semibold p-2 border-b outline-none focus:border-[#6D4A8F]"
            />
          </div>

          <div className="w-full max-w-80">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              
            </label>
            <input
            value={number}
            onChange={(e)=>{
              setNumber(e.target.value)
            }}
              type="password"
              name="password"
              placeholder="Enter phone number"
              className="w-full text-black text-lg font-semibold p-2 border-b outline-none focus:border-[#6D4A8F]"
            />
          </div>

          <button
            type="submit"
            className="w-80 py-2 mt-2 bg-gradient-to-b from-[#9D79B8] via-[#6D4A8F] to-[#2C234C] rounded-full text-white font-semibold shadow-lg hover:brightness-110 transition-all duration-300 cursor-pointer active:scale-95"
          >
            Sign Up
          </button>

          <div className="w-80 flex justify-center">
            <Link to='/login' className="font-semibold text-purple-950 cursor-pointer active:underline">Already have an account?</Link>
          </div>
        </form>
      </div>

      <div className='rounded-2xl w-full max-w-md h-72 sm:h-80 lg:h-100 relative hidden sm:block'>
        <div className='h-auto w-full max-w-130 absolute top-0 lg:-top-15 left-1/2 -translate-x-1/2'>
          <img src={picture} alt=""
            className='rounded-4xl'
          />
        </div>
      </div>

    </div>
  )
}

export default Left