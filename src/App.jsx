import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import SignUpPage from './Components/SignUpPage/SignUpPage'
import Profile from './Components/Phone/Profile/Profile'
import { AuthContext } from './Context/AuthProvider'
import Login from './Components/Phone/Login/Login'
import OpeningPage from './Components/Pages/OpeningPage/OpeningPage'
import ShoppingPage from './Components/Pages/ShoppingPage/ShoppingPage'
import ServicesPage from './Components/Pages/ServicesPage/ServicesPage'
import GalleryPage from './Components/Pages/GalleryPage/GalleryPage'
import Navbar from './others/Navbar'
import PackagePayment from './Components/PackagePayment/PackagePayment'
import Wishlist from './Components/PackagePayment/Wishlist/Wishlist'
import Cart from './Components/Pages/Cart/Cart'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  }, [])

  const [User, setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (Email, Otp) => {

    const user = authData?.find(
      (e) => Email == e.email && Otp == e.otp
    )

    if (user) {
      setUser('user')
    }
    else if (Email == 'admin@me.com' && Otp == 123) {
      setUser('SignUp Page')
    }
    else {
      alert("Invalid crendentials");
    }
  }


  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<OpeningPage />} />
        <Route path='/shop' element={<ShoppingPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/home' element={<OpeningPage />} />
        <Route path='/product' element={<ShoppingPage />} />
        <Route path='/flowers' element={<ShoppingPage />} />
        <Route path='/packages' element={<ServicesPage />} />
        <Route path='/plans' element={<ServicesPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>


      {/* {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User=='user' ? <OpeningPage />:''} */}
      
        
    </div>
  )
}

export default App