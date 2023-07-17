import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Title from "./ui/Title";
function Corousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-3 lg:mt-10"></div>
    ),
  };
  return (
    <div className="h-screen -mt-[80px]">
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="h-full w-full">
          <Image
            alt=""
            src="/Images/banner.png"
            fill={true}
            object-fit="contain"
            className="bg-center"
          />
        </div>
      </div>
      {/* Slider */}

      <Slider {...settings}>
        <div>
          <div className="bg-white h-full bg-opacity-80 mt-[80px] md:mt-24 lg:mt-48  flex flex-col gap-y-10 items-start container    mx-auto p-10 ">
            <div className="flex flex-col sm:flex-row justify-between text-black ">
              <div className="flex flex-col w-full sm:w-1/2">
                <Title addProps="p-3 sm:text-[45px] text-[30px] sm:p-10 text-primary">
                  Best Collections 2023
                </Title>
                <span className="p-3 sm:p-10 font-semibold">
                  Best Collections 2023It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem
                </span>
                <div className=" flex p-3  sm:p-10 gap-x-10 text-white">
                  <button className="btn">About Us</button>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
              {/* right */}
              <div className="lg:w-1/2 w-full h-full flex flex-col   lg:relative">
                <div className="  static lg:absolute lg:left-0 lg:top-60 z-10 xl:top-20 opacity-80  ">
                  <Image
                    alt=""
                    src="/Images/product1.jpeg"
                    width={300}
                    height={300}
                    object-fit="contain"
                  />
                </div>
                <div className="static hidden sm:flex lg:absolute lg:right-0 lg:top-0 mt-5 lg:mt-0 opacity-80">
                  <Image
                    alt=""
                    src="/Images/product2.jpeg"
                    width={300}
                    height={300}
                    object-fit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white h-full bg-opacity-80 mt-[80px] md:mt-24 lg:mt-48  flex flex-col gap-y-10 items-start container    mx-auto p-10 ">
            <div className="flex flex-col sm:flex-row justify-between text-black ">
              <div className="flex flex-col w-full sm:w-1/2">
                <Title addProps="p-3 sm:text-[45px] text-[30px] sm:p-10 text-primary">
                  Best Collections 2023
                </Title>
                <span className="p-3 sm:p-10 font-semibold">
                  Best Collections 2023It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem
                </span>
                <div className=" flex p-3  sm:p-10 gap-x-10 text-white">
                  <button className="btn">About Us</button>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
              {/* right */}
              <div className="lg:w-1/2 w-full h-full flex flex-col   lg:relative">
                <div className=" static lg:absolute lg:left-0 lg:top-60 z-10 xl:top-20 opacity-80 ">
                  <Image
                    alt=""
                    src="/Images/product1.jpeg"
                    width={300}
                    height={300}
                    object-fit="contain"
                  />
                </div>
                <div className="static hidden sm:flex lg:absolute lg:right-0 lg:top-0 mt-5 lg:mt-0 opacity-80">
                  <Image
                    alt=""
                    src="/Images/product2.jpeg"
                    width={300}
                    height={300}
                    object-fit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white h-full bg-opacity-80 mt-[80px] md:mt-24 lg:mt-48  flex flex-col gap-y-10 items-start container    mx-auto p-10 ">
            <div className="flex flex-col sm:flex-row justify-between text-black ">
              <div className="flex flex-col w-full sm:w-1/2">
                <Title addProps="p-3 sm:text-[45px] text-[30px] sm:p-10 text-primary">
                  Best Collections 2023
                </Title>
                <span className="p-3 sm:p-10 font-semibold">
                  Best Collections 2023It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem
                </span>
                <div className=" flex p-3  sm:p-10 gap-x-10 text-white">
                  <button className="btn">About Us</button>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
              {/* right */}
              <div className="lg:w-1/2 w-full h-full flex flex-col   lg:relative">
                <div className=" static lg:absolute lg:left-0 lg:top-60 z-10 xl:top-20 opacity-80 ">
                  <Image
                    alt=""
                    src="/Images/product1.jpeg"
                    width={300}
                    height={300}
                    object-fit="contain"
                  />
                </div>
                <div className="static hidden sm:flex lg:absolute lg:right-0 lg:top-0 mt-5 lg:mt-0 opacity-80">
                  <Image
                    alt=""
                    src="/Images/product2.jpeg"
                    width={300}
                    height={300}
                    object-fit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Corousel;
