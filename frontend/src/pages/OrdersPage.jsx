import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const OrdersPage = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {

      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/user-orders', {}, {headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
        
      }
      
      
    } catch (error) {
      
    }
  }


  useEffect(() => {
    loadOrderData()
  }, [token])


  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
      <Title text1={'YOUR'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          orderData.map((product,index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={product.image[0]} alt="" className='w-16 sm:w-20' />
                <div>
                  <p className='font-medium sm:text-base'>{product.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-gray-700 text-base'>
                    <p>{currency}{product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Size: {product.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(product.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-400'>{product.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 bg-green-500 rounded-full'></p>
                  <p className='text-sm text-base'>{product.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default OrdersPage
