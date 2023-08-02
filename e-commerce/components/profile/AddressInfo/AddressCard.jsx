import React, { useState } from "react";
import Title from "@/components/ui/Title";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-hot-toast";
import UpdateAddress from "./UpdateAdress";
function AddressCard({ address,user}) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [updatedClose,setUpdatedClose] = useState();

    //! delete Addresses
  const handleDeleteAddress = async (id) => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/address/${id}`
    );
    if (res.status === 200) {
      toast.success("Address succesfully deleted!");
    }
  };

  const handleClose = () => {
    setUpdatedClose(true)
  }
  const handleChange = async (e) => {
    const checkedAddress = {...address,checked:e.target.value}
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/address/${address._id}`,checkedAddress)
        if(res.status === 200){
            toast.success("Address selection made!")
        }
    } catch (err) {
       console.log() 
    }
  }
  return (
    <div className=" flex flex-col w-[300px] h-[250px] border-2 ">
      <div className="h-[50px] w-full bg-slate-100 border-b-2 flex items-center justify-between">
        <Title addProps="text-sm font-semibold px-5">
          {address.addressTitle}
        </Title>
        <Checkbox checked={address.checked} onChange={handleChange} {...label} size="small"/>
      </div>
      <div className="w-full h-1/2 flex flex-col justify-between p-5">
        <p className="text-xs font-semibold">{address.firstName}</p>
        <p className="text-xs">{address.address}</p>
        <p className="text-xs">{address.city}</p>
        <p className="text-xs">{address.phoneNumber}</p>
      </div>
      <div className="w-full flex justify-between px-3 items-center">
        <button
          onClick={() => handleDeleteAddress(address._id)}
          className="text-primary hover:text-secondary hover:scale-110 transition-all"
        >
          <DeleteIcon />
        </button>
        <button onClick={handleClose} className="btn !bg-secondary">Adresi Düzenle</button>
      </div>
      {/* Updated Component */}
      {updatedClose === true ?  <UpdateAddress id={address._id} user={user} setUpdatedClose={setUpdatedClose}/> : ""}
    </div>
  );
}

export default AddressCard;
