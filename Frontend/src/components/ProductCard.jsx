import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {

    return (
        <>
            <div className=' flex flex-col rounded-4xl p-4 text-center'>
                <img className='w-3xs h-3xs' src={product.image} alt="" />
                <p className='font-medium '>{product.title}</p>

                <p className='line-clamp-2'> {product.description}</p>
                <p className='font-bold'>₹ {product.price}</p>
                <Link to={`/product/${product.id}`} className='bg-primary cursor-pointer w-full py-2 px-4'>Quick View</Link>
            </div>
        </>
    )
}