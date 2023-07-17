import React from "react";
import TopSellerItem from "./TopSellerItem";
import Slider from "react-slick";
function TopSellerWrapper() {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 1,
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
    <div className="py-24 mt-20 sm:mt-0 sm:container sm:mx-auto ">
      <Slider {...settings}>
        <TopSellerItem />
        <TopSellerItem />
        <TopSellerItem />
        <TopSellerItem />
      </Slider>
    </div>
  );
}

export default TopSellerWrapper;
