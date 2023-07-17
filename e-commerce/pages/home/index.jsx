import Corousel from '@/components/Coroulse'
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
    </div>
  )
}

export default Home