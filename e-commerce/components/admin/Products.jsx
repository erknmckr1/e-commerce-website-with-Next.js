import React, { useState } from 'react'
import Image from 'next/image'
import Title from '../ui/Title'
import axios from 'axios'
import { toast } from 'react-hot-toast'
function Products(productList) {
  const handleDelete = async (id) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`)
      if(res.status === 200){
        toast.success("Product Deleted!")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDiscount = async (id) => {
    const discount = parseInt(prompt("How much of a discount would you like to offer?"))
    const selectedProduct = productList.productList.filter((product)=>product._id === id);

    const discountAmount = await (selectedProduct[0].price * discount / 100);
    const discountPrice = await (selectedProduct[0].price - discountAmount);
    
    const updatedProduct = {...selectedProduct,discount:discount,discountAmount:discountAmount,discountPrice:discountPrice};
    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`,updatedProduct)

    if(res.status===200){
      toast.success("Product Updated Successfully!")
    }

  }
  return (
    <div className=" flex-1 min-h-[510px] lg:mt-0 mt-5 m-2 sm:m-0 sm:px-10 ">
      <Title addProps="text-[40px]">Products</Title>
      <div className="overflow-x-auto w-full mt-5 overflow-y-scroll  ">
        <table className="w-full text-sm text-center text-black  lg:min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                discount
              </th>
              <th scope="col" className="py-3 px-6">
                disc. price
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="">
              {productList.productList.map((product)=>(
                <tr
                key={product._id}
                className="transition-all bg-slate-200  border-gray-700 hover:bg-primary "
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center ">
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    alt=""
                    src={product.image}
                  />
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product._id.substring(0,6)}...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.title}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.price}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                 <div className="flex w-full h-full justify-between border-b pb-1">
                 <input
                    type="text"
                    className="w-7 bg-transparent text-center"
                    value={product.discount}
                    disabled
                  />
                  <button onClick={()=> handleDiscount(product._id)} className="btn hover:bg-secondary"> Add</button>
                 </div>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.discountPrice}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn !bg-danger"

                  >
                    Delete
                  </button>
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products