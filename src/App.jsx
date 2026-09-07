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
import Navbar from './NavBar/Navbar'
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

  const [wishlist, setWishlist] = useState([])
  const [cart, setCart] = useState([])

  // { Wishlist Functionality }

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const alreadyExists = prev.some((wishItem) => wishItem.id === item.id);
      if (alreadyExists) { return prev.filter((wishItem) => wishItem.id !== item.id); }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // { Cart Functionality }

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.id === item.id
      );

      // If item already exists, increase quantity
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id == item.id
            ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
            : cartItem
        );
      }

      // If item doesn't exist, add it
      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  // { removeitem from cart }

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // { Increase Quantity }

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id == id
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  // { Decrease Quantity }

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id == id
          ? {
            ...item,
            quantity: item.quantity > 1
              ? item.quantity - 1
              : 1,
          }
          : item
      )
    );
  };


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
        <Route path='/' element={<OpeningPage addToWishlist={addToWishlist} wishlist={wishlist} addToCart={addToCart} />} />
        <Route path='/shop' element={<ShoppingPage addToWishlist={addToWishlist} wishlist={wishlist} addToCart={addToCart} />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/product' element={<ShoppingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />

      </Routes>


      {/* {!User ? <Login handleLogin={handleLogin} /> : ''}
      {User=='user' ? <OpeningPage />:''} */}


    </div>
  )
}

export default App