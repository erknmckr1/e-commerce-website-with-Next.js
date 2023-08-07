import React from 'react'
import Title from '../ui/Title'
import ProductItem from '../product/ProductItem'
function Saved({user,productList}) {

    const product = productList.filter((item) => user.user.saved.includes(item._id))

  return (
    <div className='flex-1 h-full sm:ml-3'>
        <Title addProps="py-5 text-[25px] font-semibold  text-center sm:text-start">Saved Product</Title>
        <div className="w-full p-1 grid place-content-center sm:max-h-[510px] overflow-y-scroll">
            <div className='sm:grid-cols-2 gap-2 grid'>
            {product.map((item)=>(
                <ProductItem key={item._id} product={item} />
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default Saved