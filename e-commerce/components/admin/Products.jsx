import React from 'react'
import Image from 'next/image'
import Title from '../ui/Title'
function Products() {
  return (
    <div className=" flex-1 lg:mt-0 mt-5 m-2 sm:m-0 px-10 ">
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
            
                <tr
                  
                  className="transition-all bg-slate-200  border-gray-700 hover:bg-primary "
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center ">
                    <Image
                      className="rounded-full"
                      width={50}
                      height={50}
                      alt=""
                      src=""
                    />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    id
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    title
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    price
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                   <div className="flex w-full h-full justify-between border-b pb-1">
                   <input
                      type="text"
                      className="w-7 bg-transparent text-center"
                      value="0"
                    />
                    <button className="btn hover:bg-secondary"> Add</button>
                   </div>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    discount
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button
                      onClick={() => handleProductDelete(product._id)}
                      className="btn !bg-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products