import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
function BlogItems() {
  return (
    <div className='h-full w-full '>
        <div className='h-full w-full flex flex-col sm:flex-row items-center justify-center '>
            <div className='w-full sm:w-[570px] h-full px-5 flex flex-col items-start'>
                <Title addProps="text-[40px] pt-[70px] pb-[10px] w-full">What was the Nokia 3310?</Title>
                <p className='tracking-wide pt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                <div className='h-full mt-10 '>
                    <button className='btn '>Read Now</button>
                </div>
            </div>
            <div className='w-full sm:w-[570px] h-full items-center flex'>
                <div className=' relative w-full h-[300px]  lg:h-full'>
                    <Image
                    alt=''
                    src="/images/product2.jpeg"
                    fill={true}
                    object-fit="cover"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogItems