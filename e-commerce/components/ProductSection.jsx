import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

function ProductSection() {
  return (
    <div className="w-screen h-auto lg:h-[335px] bg-secondary py-10  lg:mt-0 transition-all">
      <div className="w-full h-full flex flex-col lg:flex-row p-2">
        {/* text side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-evenly  sm:pl-28 pl-0  text-white px-4">
          <Title addProps="py-5 md:py-3  lg:py-0 text-[30px]">Every Product</Title>
          <span className=" py-5 md:py-3 lg:py-0 text-[50px] sm:text-[70px]">Up to 40% off !</span>
          <div className="py-5 md:py-3 lg:py-0">
            <button className="btn">Shop Now</button>
          </div>
        </div>
        {/* image side */}
        <div className="lg:w-1/2 h-full flex justify-evenly  lg:mr-10 py-10 md:py-0 ">
            <div className="relative w-[250px] h-[250px] lg:w-1/2 lg:h-full  ">
                <Image
                alt=""
                src="/images/product1.jpeg"
                fill={true}
                object-fit="cover"
                className="opacity-80"
                />
            </div>
            <div className="relative w-[250px] h-[250px] lg:w-1/2 lg:h-full ">
                <Image
                alt=""
                src="/images/ipods.jpeg"
                fill={true}
                object-fit="cover"
                className="opacity-80"
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
