import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CollectionPage from './pages/CollectionPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrdersPage from './pages/OrdersPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import VerifyPage from './pages/VerifyPage'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/collection' element={<CollectionPage />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/place-order' element={<PlaceOrderPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/verify' element={<VerifyPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
