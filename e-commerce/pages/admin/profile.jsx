/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from "next/image";
import { useState } from "react";
import UserInfo from "@/components/profile/UserInfo";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Orders from "@/components/profile/Orders";
import AddressInfo from "@/components/profile/AddressInfo/AddressInfo";
import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
function profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const [close, setClose] = useState(true);
  
  const handleClick = () => {
    setClose((prev) => !prev);
  };

  const handleSıgnOut = () => {
    if(confirm("Are you sure you want to log out? ")){
      signOut();
      toast.success("You debuted successfully!")
    }
  }
  return (
    <div className="container mx-auto py-20 relative  ">
      <div className="w-full h-full flex justify-between  ">
        {/* left side */}
        <div
          className={`sm:w-[350px] w-[250px]  bg-slate-200 absolute top-0 sm:static z-40 h-screen sm:h-auto duration-1000 ${
            close === false ? "-translate-x-[300px]" : ""
          }`}
        >
          <div className="w-full flex flex-col items-center justify-center overflow-hidden py-3 relative">
            <Image
              alt=""
              width={100}
              height={100}
              src="/images/product1.jpeg"
              className="rounded-full"
            />
            <span className="py-5 text-[20px] font-semibold">ADMİN</span>
            <button className="flex items-center">
              <ArrowBackIosNewIcon
                onClick={handleClick}
                className="h-10 w-10 rounded-full bg-secondary justify-start text-white sm:hidden text-right absolute -top-1 -right-3"
              />
            </button>
          </div>
          <div className="flex flex-col w-full h-full py-10 ">
            <ul className="w-full h-full ">
              <li className="">
                <button
                  onClick={() => {
                    setTabIndex(0);
                  }}
                  className="btn w-full"
                >
                  Products
                </button>
              </li>
              <li className="w-full">
                <button
                  onClick={() => {
                    setTabIndex(1);
                  }}
                  className="btn w-full "
                >
                  Orders
                </button>
              </li>
              <li className="">
                <button
                  onClick={() => {
                    setTabIndex(2);
                  }}
                  className="btn w-full"
                >
                  Categories
                </button>
              </li>
              <li className="">
                <button
                  onClick={() => {
                    setTabIndex(3);
                  }}
                  className="btn w-full"
                >
                  Saved
                </button>
              </li>
              <li className="">
                <button
                  onClick={() => {
                    setTabIndex(3);
                  }}
                  className="btn w-full"
                >
                  Footer
                </button>
              </li>
              <li className="">
                <button onClick={handleSıgnOut} className="btn w-full">Exit</button>
              </li>
            </ul>
          </div>
        </div>
        {/* right side */}
        
      </div>
      <ArrowForwardIosIcon
        onClick={handleClick}
        className={`absolute top-0 left-0 ${close === true ? "hidden" : ""}`}
      />
    </div>
  )
}

export default profile