import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';
// import { products } from '../assets/assets';


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((product) => product.bestseller || product.bestSeller);
        setBestSeller(bestProducts.slice(0,5));
        // console.log('Bestseller products found:', bestProducts);
    },[products])



  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Our top-selling collection proves why athletes and style enthusiasts choose DrizzleFit again and again. The HyperFlex Joggers lead the pack with their revolutionary 4-way stretch fabric that moves seamlessly from heavy workouts to casual wear, featuring sweat-wicking technology and secure-zip pockets.
            </p>
        </div>  

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((product,index) => (
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

export default BestSeller
