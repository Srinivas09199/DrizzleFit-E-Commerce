import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddPage from './pages/AddPage'
import ListPage from './pages/ListPage'
import OrdersPage from './pages/OrdersPage'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';




export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₹'


const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])



  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {
        token === '' ? <Login setToken={setToken} /> 
        : 
          <>
            <Navbar setToken={setToken} />
            <hr />
            <div className='flex w-full'>
              <Sidebar />
              <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                <Routes>
                  <Route path='/add' element={<AddPage token={token} />} />
                  <Route path='/list' element={<ListPage token={token} />} />
                  <Route path='/orders' element={<OrdersPage token={token} />} />
                </Routes>
              </div>
            </div>
          </>
      }
   
    </div>
  )
}

export default App
