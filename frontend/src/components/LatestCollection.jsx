import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {
    
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    }, [products]);

   


  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-500'>
                Designed for the dynamic and the bold, our new drop blends performance-driven innovation with street-ready style. Whether you're crushing workouts or urban adventures, these pieces deliver breathable comfort, sharp aesthetics, and sustainable craftsmanship.
            </p>
        </div>
        
      
      {/* Render the products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((product,index) => (
            <ProductItems 
              key={index} 
              id={product._id} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
            />
          ))
        }        
      </div> 
    </div>
  )
}

export default LatestCollection
