/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cardSlice";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import Title from "@/components/ui/Title";
function productDetail({ productList }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const { data: session } = useSession();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {
    query: { id },
  } = useRouter();
  const [product, setProduct] = useState([]);

  //! filtered product with id
  useEffect(() => {
    const filteredProduct = () => {
      const filtered = productList.filter((item) => item._id === id);
      setProduct(filtered);
    };
    filteredProduct();
  }, [id, productList]);



  const handleProduct = () => {
    dispatch(
      addProduct({
        ...product[0],
        quantity: 1,
      })
    );
  };

  const filteredByCategory = productList.filter((item) => {
    if (product[0]?.category === "PHONE & ACCESSORY") {
      return (
        item.category === "PHONE & ACCESSORY" && item.title.includes("Airpods")
      );
    }
    return false;
  });
  console.log(filteredByCategory);
  //! Add favorite
  const handleFav = async (e) => {
    if (session && user) {
      try {
        const userId = user[0]?._id;
        if (e.target.checked === true) {
          if (!user[0]?.saved.includes(product._id)) {
            const updatedUser = await axios.put(
              `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,
              { saved: [...user[0].saved, product._id] }
            );
            setUser([updatedUser.data.user]);
            toast.success("Product added to favorites!");
          }
        } else {
          // Favori ikonu işaretli değilse, ürünü çıkarın
          const updatedSaved = user[0]?.saved.filter(
            (favoriteId) => favoriteId !== product._id
          );
          const updatedUser = await axios.put(`/api/user/${userId}`, {
            saved: updatedSaved,
          });
          setUser([updatedUser.data.user]);
          toast.success("Product removed from favorites!");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Please log in!");
    }
  };
  return (
    <div className="w-full h-full py-10">
      <div className="container mx-auto w-full">
        <div className="flex items-center w-full flex-col ">
          <div className="flex flex-col sm:flex-row justify-evenly w-full  ">
            {/* ımage */}
            <div className=" w-full sm:w-1/2 ">
              <Image width={500} height={500} alt="" src={product[0]?.image} />
            </div>
            {/* product detail */}
            <div className="flex flex-col gap-y-3 w-full md:w-1/2 px-5 sm:px-0 py-10">
              <span className="text-[30px] ">{product[0]?.title}</span>
              <span className="text-[20px] ">{product[0]?.description}</span>
              <span className="text-[30px] font-semibold ">
                {`${
                  product[0]?.discount
                    ? product[0]?.discountPrice
                    : product[0]?.price
                }`}{" "}
                TL
              </span>
              <div className="mt-10">
                <button onClick={handleProduct} className="btn">
                  buy now
                </button>
              </div>
              {/* buttons */}
              <div className="mt-5 flex gap-x-5">
                {/* compare */}
                <div className="flex gap-x-2 items-center">
                  <span className="cursor-pointer text-[13px]">Compare</span>
                  <CompareArrowsIcon className="text-primary" />
                </div>
                {/* favorite */}
                <div className="flex gap-x-2 items-center ">
                  <span className="cursor-pointer text-[13px]">Favorite</span>
                  <Checkbox
                    onChange={handleFav}
                    className="text-primary"
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    checked={
                      user[0]?.saved.includes(product._id) ? true : false
                    }
                  />
                </div>
                {/* alert */}
                <div className="flex items-center gap-x-2 ">
                  <span className="text-[13px]">Add Alert</span>
                  <AddAlertIcon className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          {/* extra side */}
          <div className="w-full">
            <Title addProps="text-[25px] font-semibold p-10">
              What can you add ?{" "}
            </Title>
            <div className="">
              <div className="flex justify-start">
                <div className=" w-full flex justify-start gap-x-3 px-2 sm:px-0">
                  {filteredByCategory &&
                    filteredByCategory.map((item, index) => (
                      
                        <div
                          key={index}
                          className=" w-full sm:w-[350px] h-[380px] border-2"
                        >
                          <div className="w-full h-1/2 flex items-center justify-center">
                            <Image
                              alt=""
                              width={120}
                              height={120}
                              src={item.image}
                            />
                          </div>
                          <div className="flex flex-col px-10 pt-5">
                            <span className="text-[20px] font-semibold">
                              {item.title}
                            </span>
                            <span>{item.description}</span>
                            <span className="text-[20px] font-semibold py-5">
                              {item.price} TL
                            </span>
                            <button onClick={handleProduct} className="btn">buy now</button>
                          </div>
                        </div>

                     
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetail;

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
  const categories = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/category`
  );
  return {
    props: {
      productList: res.data ? res.data : [],
      categoryList: categories.data ? categories.data : [],
    },
  };
};
