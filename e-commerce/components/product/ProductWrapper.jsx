import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductWrapper() {
  const [active, setActive] = useState("");
  const categories = [
    "Phone & Accessory",
    "Computer & Tablet",
    "Kitchen Utensils",
    "Sports & Outdoor",
  ];

  const handleActive = (i) => {
    setActive(i);
  };
  
  return (
    <div className="w-screen  ">
      <div className="bg-secondary w-full overflow-x-auto">
        <div className="flex items-center justify-center h-[100px]">
          {categories.map((category, index) => (
            <button
              className={`btn mx-3 hover:bg-white hover:text-primary ${
                active === index ? "!bg-white !text-primary" : ""
              }`}
              key={index}
              onClick={() => handleActive(index)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap gap-y-10 gap-x-10 justify-center sm:justify-center items-center">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default ProductWrapper;
