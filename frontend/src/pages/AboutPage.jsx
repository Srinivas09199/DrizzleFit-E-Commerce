import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const AboutPage = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
          <p>At DrizzleFit, we believe that shopping should be simple, stylish, and satisfying. Founded with a passion for delivering quality and convenience, we are your go-to destination for trendy, affordable fashion and lifestyle essentials. From everyday wear to statement pieces, our carefully curated collections are designed to fit your style, your budget, and your life.</p>
          <p>We’re committed to providing a seamless online shopping experience with fast shipping, secure checkout, and customer-first support. Whether you're dressing up, working out, or just chilling at home, DrizzleFit has something that fits — perfectly.</p>
          {/* <p>Join us in celebrating the joy of fashion and the power of style. Welcome to DrizzleFit — where every piece tells a story, and every look makes a statement.</p> */}
          <p>Thank you for choosing DrizzleFit. We look forward to being a part of your style journey.</p>
          <p>Happy shopping!</p>
          <p>The DrizzleFit Team</p>
          <p>Style it. Own it. DrizzleFit it.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide high-quality, fashionable products at affordable prices, while offering exceptional customer service and a seamless shopping experience.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We source only the best materials and ensure that each product is crafted with precision and care.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our user-friendly platform makes shopping easy and accessible from anywhere, at any time.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is here to assist you every step of the way, ensuring your satisfaction and peace of mind.</p>
        </div>
      </div>

      <NewsLetterBox />

      <div>
        
      </div>


    </div>
  )
}

export default AboutPage
