import React from "react";
import Title from "../ui/Title";
import Image from "next/image";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function Orders({ orderList }) {
  const [openOrder, setOpenOrder] = useState(null);
  const status = ["Preparing","On The Road","Delivered"]
  
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
              <div className="flex flex-col">
                <p className="font-semibold text-xs">Order Date</p>
                <p className="text-sm">{order.createdAt.substring(0, 10)}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xs">Buyer</p>
                <p className="text-sm">{order.customer}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xs">Price</p>
                <p className="text-sm">{order.total} TL</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xs">Status</p>
                <p className="text-sm text-green-700">{status[order.status]}</p>
              </div>
              {openOrder === null ? (
                <ArrowDropDownIcon className="cursor-pointer" onClick={() => setOpenOrder(order._id)} />
              ) : (
                <ArrowDropUpIcon className="cursor-pointer" onClick={() => setOpenOrder(null)} />
              )}
            </div>
            {/* bottom side */}
            { openOrder === order._id && order.products.map((item) => (
              <div
                key={item._id}
                className="w-full flex p-3 flex-col gap-y-1 transition-all duration-1000  "
              >
                <div className="w-full border-2 p-3 flex justify-between items-center">
                  <div className=" flex flex-col justify-center">
                    <p>Teslim Edildi</p>
                    <p className="text-xs font-semibold">
                      1 Ürün {item.createdAt.substring(0, 10)} tarihinde teslim
                      edilmiştir.
                    </p>
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
  );
}

export default Orders;
