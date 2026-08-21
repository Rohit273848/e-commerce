import React from 'react'

export default function ProductCard({ product }) {
    return (
        <>
            <div className=' rounded-4xl p-4 text-center'>
                <img className='w-3xs h-3xs' src={product.image} alt="" />
                <p className='font-medium '>{product.title}</p>
               
                <p className='line-clamp-2'> {product.description}</p>
                 <p className='font-bold'>₹ {product.price}</p>
                 <button className='bg-primary cursor-pointer w-full py-2 px-4'>Quick View</button>
            </div>
        </>
    )
}