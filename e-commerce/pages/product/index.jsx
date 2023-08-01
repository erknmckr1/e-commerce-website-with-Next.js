import React from 'react'
import ProductWrapper from '@/components/product/ProductWrapper'
import axios from 'axios'
function index({categoryList,productList}) {
  return (
    <div>
        <ProductWrapper categoryList={categoryList} productList={productList}/>
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`)
  const categories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`)
  return{
    props:{
      productList: res.data ? res.data : [],
      categoryList: categories.data ? categories.data : []
    }
  }
}