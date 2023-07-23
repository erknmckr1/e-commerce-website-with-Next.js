import React from "react";
import Title from "../ui/Title";
import Image from "next/image";
function Orders() {
  return (
    <div className="flex-1 sm:ml-3">
      <Title addProps=" py-5 text-[25px] font-semibold  text-center sm:text-start">
        Orders
      </Title>
      <div className="w-full  flex flex-col gap-y-5">
        <div className="w-full border-2 rounded-lg  ">
          {/* top side */}
          <div className="w-full flex justify-between bg-slate-100 p-5">
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Order Date</p>
              <p className="text-sm">4 Şubat 2023 - 15:17</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Order Summary</p>
              <p className="text-sm">4 Şubat 2023 - 15:17</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Buyer</p>
              <p className="text-sm">Erkan Mustafa Çakır</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Price</p>
              <p className="text-sm">4 Şubat 2023 - 15:17</p>
            </div>
          </div>
          {/* bottom side */}
          <div className="w-full flex p-5 flex-col gap-y-3  ">
            <div className="w-full border-2 p-5 flex justify-between items-center">
              <div className="w-full flex flex-col justify-center">
                <p>Teslim Edildi</p>
                <p className="text-xs font-semibold">
                  1 Ürün 7 şubatta teslim edilmiştir
                </p>
              </div>
              <div className="w-full">
                <p className="text-sm"> Iphone 14 Pro 128 GB </p>
              </div>
              <div className="">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/images/product1.jpeg"
                />
              </div>
            </div>
            <div className="w-full border-2 p-5 flex">
              <div className="w-full flex flex-col justify-center">
                <p>Teslim Edildi</p>
                <p className="text-xs font-semibold">
                  1 Ürün 7 şubatta teslim edilmiştir
                </p>
              </div>
              <div className="">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/images/product1.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 rounded-lg ">
          {/* top side */}
          <div className="w-full flex justify-between bg-slate-100 p-5">
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Order Date</p>
              <p className="text-sm">4 Şubat 2023 - 15:17</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Order Summary</p>
              <p className="text-sm">4 Şubat 2023 - 15:17</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Buyer</p>
              <p className="text-sm">Erkan Mustafa Çakır</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-xs">Price</p>
              <p className="text-sm">4 Şubat 2023 - 15:17</p>
            </div>
          </div>
          {/* bottom side */}
          <div className="w-full flex p-5 flex-col gap-y-3  ">
            <div className="w-full border-2 p-5 flex">
              <div className="w-full flex flex-col justify-center">
                <p>Teslim Edildi</p>
                <p className="text-xs font-semibold">
                  1 Ürün 7 şubatta teslim edilmiştir
                </p>
              </div>
              <div className="">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/images/product1.jpeg"
                />
              </div>
            </div>
            <div className="w-full border-2 p-5 flex">
              <div className="w-full flex flex-col justify-center">
                <p>Teslim Edildi</p>
                <p className="text-xs font-semibold">
                  1 Ürün 7 şubatta teslim edilmiştir
                </p>
              </div>
              <div className="">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/images/product1.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
