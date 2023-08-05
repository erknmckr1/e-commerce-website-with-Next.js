import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
function ProductWrapper({productList,categoryList}) {
  const [active, setActive] = useState("");
  const [filteredProduct,setFilteredProduct] = useState([]);
  
  const handleFiltered = (category) => {
    const filtered = productList.filter((product)=>(
      product.category === category
    ))
      
    setFilteredProduct(filtered)
    
  }

  const handleActive = (i) => {
    setActive(i);
  };

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 4,
    
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 3,
        },
      },
    ],    
    appendDots: dots => (
        <div>
            <ul className="  container mx-auto w-full text-start">{dots}</ul>
        </div>
    ),
    customPaging: (i) => (
        <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
      ),
  };
  return (
    <div className="w-screen min-h-[510px]  ">
      <div className="bg-secondary w-full">
        <div className=" ">
          <Slider {...settings}>
          {categoryList?.map((category, index) => (
            <button
              className={`btn mx-3 hover:bg-white hover:text-primary ${
                active === index ? "!bg-white !text-secondary " : ""
              }`}
              key={category._id}
              onClick={() =>( handleActive(index), handleFiltered(category.title))}
            >
              {category.title}
            </button>
          ))}
          </Slider>
          
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap gap-y-10 gap-x-10 justify-center sm:justify-center items-center">
         {filteredProduct.map((product)=>(
           <ProductItem product={product} key={product._id} />
           
         ))}
        </div>
      </div>
    </div>
  );
}

export default ProductWrapper;
