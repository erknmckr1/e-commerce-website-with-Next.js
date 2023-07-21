/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import Title from "@/components/ui/Title";
import OrderCard from "@/components/cardPage/orderCard";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
function index() {
  const [show,setShot]= useState(true)

  const handleClick = () => {
    setShot(prev => !prev)
  }
  return (
    <div className="container  lg:px-20 mx-auto min-h-[calc(100vh_-_385px)] relative">
      <div className="w-full h-full sm:px-2">
        <Title addProps="text-[25px]">My Card(1)</Title>
        <div className="w-full flex gap-x-5 py-10 ">
          <div className="w-full sm:w-3/4 h-full  flex flex-col gap-y-3 px-1">
           <OrderCard/>
           <OrderCard/>
           <OrderCard/>
           <OrderCard/>
          </div>
          <div className={`  sm:w-1/4 h-[200px] bg-[#FEF2E7]  rounded-lg lg:p-10 sm:p-5 p-1 py-3 flex flex-col justify-between right-0  lg:right-14 fixed sm:static  ${show===false ? "translate-x-[250px]" :""} transition-all duration-1000 `}>
                <Title addProps="sm:text-[20px] text-sm text-center ">Sipariş Özeti</Title>
                <div className="flex justify-between items-center   ">
                    <p className="text-xs">Sipariş Toplamı:</p>
                    <span>267,960 TL</span>
                </div>
                <div>
                <button className="btn">sepeti Onayla</button>
                </div>       
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="sm:hidden absolute top-0 right-0 text-primary ">< ConfirmationNumberIcon/></button>
      
    </div>
  );
}

export default index;
