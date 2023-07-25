import React from "react";
import Image from "next/image";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
function ProductItem() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="w-[260px] h-[400px] border-2 p-3 relative">
      <div className="w-full h-full">
        <div className="bg-white flex justify-center hover:scale-110 transition-all">
          <Image alt="" src="/images/product1.jpeg" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center uppercase ">
          <p className="p-3 text-[22px] font-bold">İphone 14 pro</p>
          <p className="p-2 text-[13px] text-center">
            128GB Derin Mor Cep Telefonu
          </p>
          <p className="font-bold p-2">66.876 TL </p>
          <button className="btn">Buy now</button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
      <Checkbox className="text-primary" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </div>
    </div>
  );
}

export default ProductItem;
