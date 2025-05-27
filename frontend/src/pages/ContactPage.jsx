import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const ContactPage = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-gray-600 text-xl'>Our Office</p>
          <p className='text-gray-500'>123, Main Street, <br /> Anytown, USA</p>
          <p className='text-gray-500'>Tel: (123) 456-7890 <br /> Email: admin@drizzlefit.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Carres at DrizzleFit</p>
          <p className='text-gray-500'>Learn more about our company and how we can help you.</p>
          <p className='text-gray-500'>Mon - Fri: 9:00 - 18:00</p>
          <p className='text-gray-500'>Sat - Sun: 9:00 - 14:00</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-md'>Explore More</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default ContactPage
