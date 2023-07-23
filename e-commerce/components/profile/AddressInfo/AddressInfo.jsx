import React, { useState } from "react";
import Title from "../../ui/Title";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Update from "./UpdateAddress";
function AddressInfo() {
  const [close,setClose] = useState(false)

  const handleClick = () => {
    setClose(true)
    
  }
  return (
    <div className="flex-1 sm:ml-3 relative">
      <div className="flex flex-col gap-y-3">
        {/* title */}
        <div className="w-full flex justify-between py-5 px-1 sm:p-5 border-2 rounded-md">
          <Title addProps="py-1 text-[20px] font-semibold  text-center sm:text-start">
            Address Information
          </Title>
          <div className="flex font-semibold  items-center p-1 text-sm cursor-pointer hover:underline hover:text-[#F27A1A]">
            <AddIcon className="text-[#F27A1A]" />
            <span onClick={handleClick} className="text-xs">Add a new address</span>
          </div>
        </div>
        {/* adress side */}
        <div className="w-full flex flex-wrap  border-2 p-5 gap-5 justify-center sm:justify-start">
          <div className=" flex flex-col w-[300px] h-[250px] border-2 ">
            <div className="h-[50px] w-full bg-slate-100 border-b-2 flex items-center">
              <Title addProps="text-sm font-semibold px-5">Home Adress</Title>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-between p-5">
              <p className="text-xs font-semibold">Erkan Mustafa Çakır</p>
              <p className="text-xs">Fevzi Çakmak Mahallesi güven sokak 32/9</p>
              <p className="text-xs">Bahçelievler/İstanbul</p>
              <p className="text-xs">5050054134</p>
            </div>
            <div className="w-full flex justify-between px-3 items-center">
              <button className="text-primary hover:text-secondary hover:scale-110 transition-all">
                <DeleteIcon />
              </button>
              <button className="btn !bg-secondary    ">Adresi Düzenle</button>
            </div>
          </div>
          <div className=" flex flex-col w-[300px] h-[250px] border-2 ">
            <div className="h-[50px] w-full bg-slate-100 border-b-2 flex items-center">
              <Title addProps="text-sm font-semibold px-5">Home Adress</Title>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-between p-5">
              <p className="text-xs font-semibold">Erkan Mustafa Çakır</p>
              <p className="text-xs">Fevzi Çakmak Mahallesi güven sokak 32/9</p>
              <p className="text-xs">Bahçelievler/İstanbul</p>
              <p className="text-xs">5050054134</p>
            </div>
            <div className="w-full flex justify-between px-3 items-center">
              <button className="text-primary hover:text-secondary hover:scale-110 transition-all">
                <DeleteIcon />
              </button>
              <button className="btn !bg-secondary    ">Adresi Düzenle</button>
            </div>
          </div>
          <div className=" flex flex-col w-[300px] h-[250px] border-2 ">
            <div className="h-[50px] w-full bg-slate-100 border-b-2 flex items-center">
              <Title addProps="text-sm font-semibold px-5">Home Adress</Title>
            </div>
            <div className="w-full h-1/2 flex flex-col justify-between p-5">
              <p className="text-xs font-semibold">Erkan Mustafa Çakır</p>
              <p className="text-xs">Fevzi Çakmak Mahallesi güven sokak 32/9</p>
              <p className="text-xs">Bahçelievler/İstanbul</p>
              <p className="text-xs">5050054134</p>
            </div>
            <div className="w-full flex justify-between px-3 items-center">
              <button className="text-primary hover:text-secondary hover:scale-110 transition-all">
                <DeleteIcon />
              </button>
              <button onClick={handleClick} className="btn !bg-secondary    ">Adresi Düzenle</button>
            </div>
          </div>
        </div>
        {close === true ?  <Update setClose={setClose}/> : ""}
      </div>
      
    </div>
  );
}

export default AddressInfo;
