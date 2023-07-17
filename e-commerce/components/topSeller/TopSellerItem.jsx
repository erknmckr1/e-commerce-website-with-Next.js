import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

function TopSellerItem() {
  return (
    <div className='h-[270px] sm:h-[252px] w-[370px] sm:w-[500px] mx-3 p-5  bg-[#D71A7B] flex '>
        <div className='flex flex-col w-1/2 justify-evenly'>
            <Title addProps="text-[25px] text-white p-1">Best Sales Mobile</Title>
            <span className='text-white p-1'>It is a long established fact that a reader It is a </span>
            <div className=''>
            <button className='btn p-1 !bg-secondary text-[#D71A7B] !hover:bg-[#D71A7B] hover:text-primary'>shop now</button>
            </div>
            
        </div>
        <div className='w-1/2 flex items-center  justify-center  overflow-hidden hover:scale-110 transition-all '>
            <Image
            alt=""
            src="/images/product1.jpeg"
            width={200}
            height={200}
            className='rounded-full border-secondary border-2'
            
            />
        </div>
    </div>
  )
}

export default TopSellerItem