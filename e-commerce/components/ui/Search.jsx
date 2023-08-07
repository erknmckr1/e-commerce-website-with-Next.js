import React, { useEffect, useState } from "react";
import Title from "./Title";
import Image from "next/image";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function Search() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  //! getProducts
  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/product`
      );
      setTimeout(() => {
        setProducts(products.data);
        setFilteredProduct(products.data);
      }, 1500);
    };
    getProducts();
  }, []);

  //! filter product
  useEffect(() => {
    const filter = products.filter((item) => item.title.includes(searchText));
    setFilteredProduct(filter.slice(0, 4));
  }, [searchText, products]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="w-screen h-screen top-0 left-0 absolute  bg-white bg-opacity-90 z-40 max-h-[calc(100vh_-_80px)] mt-[80px]">
      <div className="container mx-auto flex justify-center">
        <div className="h-full  flex flex-col justify-center items-center w-full     sm:w-[700px]">
          <Title addProps="text-[40px] my-5 ">Search</Title>
          <div className="flex justify-center  w-full h-full items-center">
            <input
              placeholder="Which product are you looking for?"
              className="border-secondary border-2 h-12 w-full rounded-2xl px-5 bg-secondary text-white tracking-widest placeholder:text-center mx-3 lg:mx-0 "
              onChange={handleChange}
            />
          </div>
          {filterProducts.length > 0 ? (
            <div className="sm:w-full w-[400px] h-full mt-5 p-5 overflow-x-scroll">
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
                      price
                    </th>
                  </tr>
                </thead>
                {/* tbody */}
                <tbody>
                  {filterProducts.map((item) => (
                    <tr
                      key={item._id}
                      className="transition-all bg-white hover:bg-slate-100  border-primary border-2 hover:scale-105 hover:border-secondary"
                    >
                      <td className="py-4 px-6 font-medium whitespace-nowrap  flex items-center gap-x-1 justify-center ">
                        <Image
                          className="rounded-full"
                          width={50}
                          height={50}
                          alt=""
                          src={item.image}
                        />
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap  text-center">
                        {item.title}
                      </td>

                      <td className="py-4 px-6 font-medium whitespace-nowrap  text-center">
                        {item.price} TL
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-10">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="3"
                animationDuration="0.75"
                width="80"
                visible={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
