import React, { useEffect, useState } from "react";
import Title from "../../ui/Title";
import AddIcon from "@mui/icons-material/Add";
import NewAddress from "./NewAddress";
import AddressCard from "./AddressCard";
import axios from "axios";


function AddressInfo({user}) {
  const [close,setClose] = useState(false)
  const [address,setAddress] = useState()
  const handleClick = () => {
    setClose(true)
    
  }

  //! getAddress
  useEffect(()=>{
    const getAddress = async () => {
      try {
        const adresses = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/address`)
        const filteredAddress = adresses.data.filter((item)=> item.email === user.user.email)
        setAddress(filteredAddress)
      } catch (err) {
        console.log(err)
      }
    }
    getAddress();
  },[user.user.email])
  
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
          {
            address?.map(item => (
              <AddressCard user={user} address={item} key={item._id}/>
            ))
          }
        </div>
        {close === true ?  <NewAddress user={user} setClose={setClose}/> : ""}
        
      </div>
      
    </div>
  );
}

export default AddressInfo;
