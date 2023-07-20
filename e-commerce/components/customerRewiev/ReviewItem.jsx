  import React from "react";
  import Title from "../ui/Title";
  import Image from "next/image";
  function ReviewItem() {

    //! İndex e göre background ekleyecegız 
    return (

      <div className="flex items-center justify-center lg:justify-between">
  <div className="h-auto sm:h-[252px] w-[370px] sm:w-[570px] lg:w-[500px] xl:w-[570px] p-3 bg-secondary text-white    ">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col w-full justify-evenly">
            <div className="w-full h-full flex justify-between items-center">
              <Title addProps="text-[30px]  p-1">Sandy Miller</Title>
              <div className="   overflow-hidden hover:scale-110 transition-all opacity-80 ">
                <Image
                  alt=""
                  src="/images/quote-icon.png"
                  width={60}
                  height={60}
                  className="bg-white rounded-full "
                />
              </div>
            </div>

            <span className=" p-3">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute
            </span>
          </div>
          
          <div className="  flex justify-end   overflow-hidden hover:scale-110 transition-all mb-2 ">
            <Image
              alt=""
              src="/images/product1.jpeg"
              width={50}
              height={50}
              className="rounded-full border-primary border-2"
            />
          </div>
        </div>
      </div>
      </div>
      
    );
  }

  export default ReviewItem;
