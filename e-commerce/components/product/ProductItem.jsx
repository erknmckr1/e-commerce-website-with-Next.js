import React, { useEffect, useState } from "react";
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cardSlice";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
function ProductItem({ product }) {
  const {push} = useRouter();

  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [user,setUser] = useState([]);
  const { data: session } = useSession();

 
  //! get Users
  useEffect(()=>{
    const getUsers =  async()=>{
      try {
        const userList = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`)
        const filteredUser = userList.data.filter((item)=>item.email === session.user.email)
        setUser(filteredUser)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers();
  },[session])
  
  const handleProduct = () => {
    dispatch(
      addProduct({
        ...product,
        quantity: 1,
      })
    );
  };
  
  //! Add favorite
  const handleFav = async (e) => {
    if(session && user){
      try {
        const userId = user[0]?._id;
        if(e.target.checked === true){
          if(!user[0]?.saved.includes(product._id)){
            const updatedUser = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,{saved:[...user[0].saved, product._id]})
            setUser([updatedUser.data.user]);
            toast.success("Product added to favorites!");
          }
        }else {
          // Favori ikonu işaretli değilse, ürünü çıkarın
          const updatedSaved = user[0]?.saved.filter((favoriteId) => favoriteId !== product._id);
          const updatedUser = await axios.put(`/api/user/${userId}`, {saved: updatedSaved });
          setUser([updatedUser.data.user]);
          toast.success("Product removed from favorites!");
        }
      } catch (err) {
        console.log(err)
      }
    }else{
      toast.error("Please log in!")
    }
  };
  return (
    <div className="w-[260px] h-[400px] border-2 p-3 relative">
      <div className="w-full h-full">
        <div onClick={()=>{push(`/product/${product._id}`)}} className="bg-white h-1/2 flex justify-center cursor-pointer hover:scale-110 transition-all">
          <Image alt="" src={product.image} width={200} height={200} />
        </div>
        <div className="flex w-full h-1/2 justify-between  flex-col items-center  uppercase ">
          <p className="p-3 text-[17px] text-center font-bold">
            {product.title}
          </p>
          <p className="p-2 text-[10px] text-center">{product.description}</p>
          <p
            className={`${
              product.discount > 0
                ? "font-bold p-2 text-red-600"
                : "font-bold p-2"
            }`}
          >
            {product.discount > 0 ? product.discountPrice : product.price} TL{" "}
          </p>
          <button onClick={handleProduct} className="btn">
            Buy now
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <Checkbox
          onChange={handleFav}
          className="text-primary"
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          checked={user[0]?.saved.includes(product._id) ? true : false}
        />
      </div>
    </div>
  );
}

export default ProductItem;
