import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} alt="logo" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    DrizzleFit is a premium performance wear brand that seamlessly blends high-tech athletic functionality with urban street style. Designed for the modern mover, our collections feature innovative fabrics with moisture-wicking, 4-way stretch, and anti-odor properties – all crafted with sustainable practices like recycled materials and eco-friendly dyes. 
                </p> 
            </div>
            
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about'}><li>About us</li></Link>
                    <li>Deliver</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9012345678</li>
                    <li>contact@drizzlefit.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright &copy; 2025@ drizzlefit.com - All rights reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer
