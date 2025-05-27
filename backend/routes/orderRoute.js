import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, getAllOrders, getUserOrders, updateOrderStatus, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/authUser.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, getAllOrders)
orderRouter.post('/status', adminAuth, updateOrderStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// User Features
orderRouter.post('/user-orders', authUser, getUserOrders)

// Verify Payment Method
orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter