import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Title from "../ui/Title";
import Image from "next/image";
import { useState,useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Order() {
  const [orderList, setOrderList] = useState([]);
  const [openOrder, setOpenOrder] = useState(null);
  const status = ["Preparing","On The Road","Delivered"]

  //! Get Orders
  useEffect(() => {
    async function getOrders() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order`);
        if (res.status === 200) {
          setOrderList(res.data); // Gelen veriyi orderList'e set ediyoruz
        }
      } catch (err) {
        console.log(err);
      }
    }
    getOrders();
  }, []);

 
  //! Status degerını guncelle 
  const handleStatus = async (id) => {
    const order = orderList.find((order) => order._id === id)
    const currentStatus = order.status;
    try {
        if(currentStatus < 2){
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`,{status:currentStatus + 1})
          if(res.status === 200){
            toast.success("Status Updated!")
            setOrderList(prevOrderList => prevOrderList.map(order => order._id === id ? { ...order, status: currentStatus + 1 } : order));
          }
        }
    } catch (err) {
      console.log(err)
    }
  }

  //! Delete Order
  const handleDelete = async (id) => {
    try {
        if(confirm("Are you sure you want to delete order?")){
          const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`)
          if(res.status===200){
            toast.success("Order successfully deleted!")
          }
        }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex-1 sm:ml-3">
      <Title addProps=" py-5 text-[25px] font-semibold  text-center sm:text-start">
        Orders
      </Title>
      <div className="w-full  flex flex-col gap-y-5 max-h-[510px] overflow-y-scroll">
        {orderList.map((order) => (
          <div key={order._id} className="w-full border-2 rounded-lg  ">
            {/* top side */}
            <div className="w-full flex justify-between bg-slate-100 p-5 relative">
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold text-xs">Order Date</p>
                <p className="text-sm">{order.createdAt.substring(0, 10)}</p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold text-xs">Buyer</p>
                <p className="text-sm">{order.customer}</p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold text-xs">Price</p>
                <p className="text-sm">{order.total} TL</p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold text-xs">Status</p>
                <p className="text-sm text-green-700">{status[order.status]}</p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="font-semibold text-xs">Next</p>
                <button onClick={()=>handleStatus(order._id)} className='text-sm underline-offset-2 underline text-primary '>Next Stat.</button>
              </div>
              {openOrder === null ? (
                <ArrowDropDownIcon className="cursor-pointer" onClick={() => setOpenOrder(order._id)} />
              ) : (
                <ArrowDropUpIcon className="cursor-pointer" onClick={() => setOpenOrder(null)} />
              )}
              <DeleteIcon onClick={()=> handleDelete(order._id)} className='absolute top-0 right-0 text-secondary hover:text-primary cursor-pointer hover:scale-100 transition-all duration-100'/>
            </div>
            {/* bottom side */}
            { openOrder === order._id && order.products.map((item) => (
              <div
                key={item._id}
                className="w-full flex p-3 flex-col gap-y-1 transition-all duration-1000  "
              >
                <div className="w-full border-2 p-3 flex justify-between items-center">
                  <div className=" flex flex-col justify-center">
                    {order.status === 2 && <div>
                      <p>Teslim Edildi</p>
                    <p className="text-xs font-semibold">
                      1 Ürün {item.updatedAt.substring(0, 10)} tarihinde sipariş edildi.
                    </p></div>}
                    {order.status === 1 && <div>
                      <p>Teslim Edildi</p>
                    <p className="text-xs font-semibold">
                      1 Ürün {item.createdAt.substring(0, 10)} tarihinde verilen sipariş hazırlanıyor.
                    </p></div>}
                    {order.status === 0 && <div>
                      <p>Teslim Edildi</p>
                    <p className="text-xs font-semibold">
                      1 Ürün {item.createdAt.substring(0, 10)} tarihinde sipariş edildi.
                    </p></div>}
                  </div>
                  <p className="text-xs font-semibold">{item.title}</p>
                  <div className="">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src={item.image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order