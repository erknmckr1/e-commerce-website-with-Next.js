/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Products from "@/components/admin/Products";
import AddIcon from '@mui/icons-material/Add';
import AddProduct from "@/components/admin/AddProduct";
import Categories from "@/components/admin/Categories";
function profile() {
  const { push } = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [close, setClose] = useState(true);
  const [isVisible,setIsVisible] = useState(false)

  const handleClick = () => {
    setClose((prev) => !prev);
  };

  const handleSıgnOut = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/logout`
      );
      if (res.status === 200) {
        if (confirm("Are you sure for logout ? ")) {
          toast.success("Logout succesfully!");
          push("/admin/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex flex-col md:flex-row   py-10 relative min:h-[calc(100vh_-_510px)]  ">
      {/* left side */}
      <div
        className={` w-[250px] h-full  bg-slate-200 absolute top-0 left-0  z-30   duration-1000 ${
          close === false ? "-translate-x-[400px]" : ""
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
              className="h-10 w-10 rounded-full bg-secondary justify-start text-white  text-right absolute -top-1 -right-3"
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
              <button onClick={handleSıgnOut} className="btn w-full">
                Exit
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* right side */}
      {tabIndex === 0 && <Products />}
      {tabIndex === 2 && <Categories />}
      {isVisible && <AddProduct setIsVisible={setIsVisible} isVisible={isVisible}/>}
      <ArrowForwardIosIcon
        onClick={handleClick}
        className={`absolute top-0 left-0 ${close === true ? "hidden" : ""}`}
      />
      <AddIcon onClick={()=>setIsVisible(prev => !prev)} className="absolute bottom-0 right-3 lg:right-10 h-12 w-12 bg-secondary rounded-full text-white"/>
    </div>
  );
}

export default profile;
