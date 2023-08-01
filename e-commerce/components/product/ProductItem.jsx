import React from "react";
import Image from "next/image";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
function ProductItem({product}) {
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="w-[260px] h-[400px] border-2 p-3 relative">
      <div className="w-full h-full">
        <div className="bg-white h-1/2 flex justify-center hover:scale-110 transition-all">
          <Image alt="" src={product.image} width={200} height={200} />
        </div>
        <div className="flex w-full h-1/2 justify-between  flex-col items-center  uppercase ">
          <p className="p-3 text-[17px] text-center font-bold">{product.title}</p>
          <p className="p-2 text-[10px] text-center">
            {product.description}
          </p>
          <p className="font-bold p-2">{product.price} TL </p>
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
