import React from 'react'
import Left from './Left'

const Login = ({ handleLogin }) => {
  return (
    <div className='min-h-screen w-full p-3 sm:p-5 flex items-center justify-center'>
        <Left handleLogin={handleLogin}/>
    </div>
  )
}

export default Login