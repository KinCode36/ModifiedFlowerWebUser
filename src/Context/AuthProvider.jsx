import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [UserData, setUserData] = useState('')
  const [loggedInUser, setloggedInUser] = useState(null)
  useEffect(() => {
    setLocalStorage()
    const { users } = getLocalStorage()
    setUserData(users)
  }, [])
  

  return (
    <div>
      <AuthContext.Provider value={UserData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider