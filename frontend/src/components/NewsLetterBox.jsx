import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }


  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Join the DrizzleFit community today and instantly save 20% on your first order – plus enjoy these elite benefits:

              ✓ First access to limited-edition drops
              ✓ Members-only sales (up to 50% off)
              ✓ Free shipping on all orders
              ✓ Early notifications when bestsellers restock

              
              No spam, just premium performance wear deals.
              👉 SUBSCRIBE & CLAIM 20% OFF

              (Offer expires soon! Discount applies immediately.)
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3x rounded-md '>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-md cursor-pointer'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
