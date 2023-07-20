import About from '@/components/About'
import Corousel from '@/components/Coroulse'
import ProductSection from '@/components/ProductSection'
import Blog from '@/components/blog/Blog'
import Review from '@/components/customerRewiev/Review'
import ProductWrapper from '@/components/product/ProductWrapper'
import TopSellerWrapper from '@/components/topSeller/TopSellerWrapper'
import Header from '@/layout/Header'
import React from 'react'

function Home() {
  return (
    <div>
        <Header/>
        <Corousel/>
        <TopSellerWrapper/>
        <ProductWrapper/>
        <About/>
        <ProductSection/>
        <Blog/>
        <Review/>
    </div>
  )
}

export default Home