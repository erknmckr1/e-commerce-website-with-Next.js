import React from 'react'
import BlogItems from './BlogItems'
function Blog() {
  return (
    <div className='w-screen h-[700px] bg-[#FAFAFA] sm:p-20'>
        <div className='container mx-auto h-full w-full '>
        <BlogItems/>
        </div>
    </div>
  )
}

export default Blog