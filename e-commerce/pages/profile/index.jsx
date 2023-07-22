/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useState } from "react";
import UserInfo from "@/components/profile/UserInfo";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function index() {
    const [close,setClose] = useState(false)
    const handleClick = () => {
        setClose(prev => !prev)
    }
  return (
    <div className="container mx-auto py-20 relative ">
    
      <div className="w-full h-full flex justify-between  ">
        {/* left side */}
        <div className={`sm:w-[350px] w-[250px]  bg-slate-200 absolute top-0 sm:static z-40 h-screen sm:h-auto duration-1000 ${close === false ? "-translate-x-[300px]" :""}`}>
          <div className="w-full flex justify-center overflow-hidden py-3 relative">
            <Image
              alt=""
              width={100}
              height={100}
              src="/images/product1.jpeg"
              className="rounded-full"
            />
            <button className="flex items-center"><ArrowBackIosNewIcon onClick={handleClick}  className="h-10 w-10 rounded-full bg-secondary justify-start text-white sm:hidden text-right absolute -top-1 -right-3" /></button>
            
          </div>
          <div className="flex flex-col w-full h-full py-10 ">
            <ul className="w-full h-full ">
              <li className="">
                <button className="btn w-full">User Information</button>
              </li>
              <li className="w-full">
                <button className="btn w-full ">Orders</button>
              </li>
              <li className="">
                <button className="btn w-full">Address Info</button>
              </li>
              <li className="">
                <button className="btn w-full">Saved</button>
              </li>
              <li className="">
                <button className="btn w-full">Exit</button>
              </li>
            </ul>
          </div>
        </div>
        {/* right side */}
        <div className="w-full h-full">
          <UserInfo />
        </div>
      </div>
      <ArrowForwardIosIcon onClick={handleClick} className={`absolute top-0 left-0 ${close === true ? "hidden":""}`}/>
    </div>
  );
}

export default index;
