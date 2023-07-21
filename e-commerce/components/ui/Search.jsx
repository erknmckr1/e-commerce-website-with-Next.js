import React from "react";
import Title from "./Title";
import Image from "next/image";

function Search() {
  return (
    <div className="w-screen h-screen top-0 left-0 absolute  bg-white bg-opacity-90 z-40 max-h-[calc(100vh_-_80px)] mt-[80px]">
      <div className="container mx-auto flex justify-center">
        <div className="h-full  flex flex-col justify-center items-center w-full     sm:w-[700px]">
          <Title addProps="text-[40px] my-5 ">Search</Title>
          <div className="flex justify-center  w-full h-full items-center">
            <input
              placeholder="Which product are you looking for?"
              className="border-secondary border-2 h-12 w-full rounded-2xl px-5 bg-secondary text-white tracking-widest placeholder:text-center mx-3 lg:mx-0 "
            />
          </div>
          <div className="sm:w-full w-[400px] h-full mt-10 p-5 overflow-x-scroll">
            <table className="w-full h-full ">
              <thead className="text-xs text-white uppercase bg-primary rounded-2xl border-primary border-2 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    IMAGE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TITLE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    price
                  </th>
                </tr>
              </thead>
              {/* tbody */}
              <tbody>
                <tr className="transition-all bg-white  border-primary border-2 ">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center ">
                    <Image
                      className="rounded-full"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/product1.jpeg"
                    />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    Iphone 14 pro
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    66666
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    xxxxxx
                  </td>
                </tr>
                <tr className="transition-all bg-white  border-primary border-2 ">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center ">
                    <Image
                      className="rounded-full"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/product1.jpeg"
                    />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    Iphone 14 pro
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    66666
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    xxxxxx
                  </td>
                </tr>
                <tr className="transition-all bg-white border-primary border-2 ">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center ">
                    <Image
                      className="rounded-full"
                      width={50}
                      height={50}
                      alt=""
                      src="/images/product1.jpeg"
                    />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    Iphone 14 pro
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    66666
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white text-center">
                    xxxxxx
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
