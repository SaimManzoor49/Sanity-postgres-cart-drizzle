'use client'
import Image from 'next/image'
import React from 'react'
import { Image as IImage } from 'sanity';

interface IData{
    title:string,
    _id:string,
    price:string,
    description:string,
    image:IImage,
    imgUrl:string|'',
    category:{
      name:string
    }
  
  }

export default function ProductCard({d}:{d:IData}) {

    const handleAddToCart = async()=>{

        const res = await fetch('/api/cart',{
            method:'POST',
            body:JSON.stringify({
                product_id:d._id,
            })
        })

        const result = await res.json();
        console.log(result)

    }

  return (
    <>

    <Image src={d.imgUrl} alt='Product' height={200} width={300} className='max-h-[200px] object-cover object-top' />
        <h1>{d.title}</h1>
        <h3>${d.price}</h3>
        <button onClick={handleAddToCart} className='border py-2 px-6 rounded bg-blue-600 text-white '>Add to cart</button>

    </>
  )
}
