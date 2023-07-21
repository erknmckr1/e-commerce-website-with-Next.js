import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
function OrderCard() {
    const [count,setCount] = useState(0);
  return (
    <div className='w-full h-[150px] p-5 bg-slate-400 relative'>
        <div className='w-full h-full flex items-center justify-evenly gap-x-5 text-sm'>
            {/* image */}
            <div>
                <Image
                alt=''
                width={100}
                height={100}
                src="/images/product1.jpeg"
                />
            </div>
            <div className='flex flex-col gap-y-1 justify-between text-xs '>
                <p>Iphone 14 pro 128 gb...</p>
                <Link href="#">Ürüne gözden atabilirsiniz!</Link>
            </div>
            {/* stepper */}
            <div className='flex gap-x-3 items-center text-[15px]'>
                <button onClick={()=>count >0 ? setCount(prev => prev -1) :""}>-</button>
                <input value={count} className='w-[30px] h-[20px] text-center' type="number"  disabled/>
                <button onClick={()=>setCount(prev => prev + 1)}>+</button>
            </div>
            {/* price */}
            <span>66,990 TL</span>
        </div>
        <span className=' absolute rounded-full w-10 h-10 bg-white -top-3 -right-5'></span>
        <button className="absolute   rounded-full w-10 h-10 bg-white -left-5 -top-3 text-secondary hover:text-primary "><DisabledByDefaultIcon/></button>
    </div>
  )
}

export default OrderCard