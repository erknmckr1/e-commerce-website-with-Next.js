/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import Title from "@/components/ui/Title";
import OrderCard from "@/components/cardPage/orderCard";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { reset } from "@/redux/cardSlice";


function index({userList,addressList}) {
 
  const dispatch  = useDispatch();
  const {products,total,discountAmount,subTotal} = useSelector(state => state.card)
  const [show,setShot]= useState(true)
  const {data:session} = useSession();
 

  //! Kullanıcı hesapları arasından oturum acmıs kullanıcıyı fıltreledık.
  const user = userList.filter((user)=> user.email === session?.user.email)

  //! Kullanıcın adresleri içinden checked olanı bulduk 
  const address = addressList.filter((address)=>address.checked  && address.email === user[0]?.email )
  
  //! Sipariş bılgıleri 
  const order = {
    customer:user[0]?.firstName ,
    address:address[0]?.address,
    total:total,
    status:0,
    products:products
  }

  
  
  const handleClick = () => {
    setShot(prev => !prev)
  }

  //! create order
  const createOrder = async () => {
   try {
      if(session){
        if(confirm("Do you confirm the order? ")){
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order`,order);

          if(res.status === 200){
            toast.success("Order Created Successfully!")
            dispatch(reset());
          }
        }
      }else{
        toast.error("Please log in!")
      }
   } catch (err) {
    console.log(err)
   }
  }
  return (
    <div className="container  lg:px-20 mx-auto min-h-[calc(100vh_-_385px)] relative">
      <div className="w-full h-full sm:px-2">
        <Title addProps="text-[25px]">My Card({products.length})</Title>
        <div className="w-full flex gap-x-5 py-10 ">
          <div className="w-full  h-full  flex flex-col gap-y-3 px-1 max-h-[510px] overflow-y-scroll">
           {products.length > 0 ? products.map((product)=>(
            <OrderCard key={product._id}/>
           )) : <span></span>}
          </div>
          <div className={`  sm:w-1/4 h-[200px] bg-[#FEF2E7]  rounded-lg lg:p-4 sm:p-5 p-1 py-3 flex flex-col justify-between right-0  lg:right-14 fixed   ${show===false ? "translate-x-[400px]" :""} transition-all duration-1000 `}>
                <Title addProps="sm:text-[20px] text-sm text-center ">Sipariş Özeti</Title>
                <div className="flex justify-between items-center   ">
                    <p className="text-xs">Ara Toplam:</p>
                    <span className="">{subTotal && subTotal} TL</span>
                </div>
                <div className="flex justify-between items-center   ">
                    <p className="text-xs">İndirim Miktarı:</p>
                    <span className="text-primary">{discountAmount && discountAmount} TL</span>
                </div>
                <div className="flex justify-between items-center   ">
                    <p className="text-xs">Sipariş Toplamı:</p>
                    <span>{total && total} TL</span>
                </div>
                <div>
                <button onClick={createOrder} className="btn">sepeti Onayla</button>
                </div>       
          </div>
        </div>
      </div>
      <button onClick={handleClick} className=" absolute top-0 right-0 text-primary ">< ConfirmationNumberIcon/></button>
      
    </div>
  );
}

export default index;

export const getServerSideProps = async () => {
  const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`)
  const address = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/address`)
  return{
    props:{
      userList:user.data ? user.data : [],
      addressList:address.data ? address.data : []
    }
  }
}
