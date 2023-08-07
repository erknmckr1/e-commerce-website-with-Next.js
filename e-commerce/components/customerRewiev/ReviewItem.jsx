import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Image from "next/image";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSession } from "next-auth/react";
function ReviewItem({ review }) {
  const [users, setUsers] = useState([]);

  //! Get users
  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user`
        );
        const filteredUser = users.data.filter(
          (item) => item.email === review.email
        );
        setUsers(filteredUser);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  //! İndex e göre background ekleyecegız
  return (
    <div className="flex items-center justify-center lg:justify-between">
      <div className="h-auto sm:h-[252px] w-[370px] sm:w-[570px] lg:w-[500px] xl:w-[570px] p-3 bg-secondary text-white    ">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col w-full justify-evenly">
            <div className="w-full h-full flex justify-between items-center">
              <Title addProps="text-[30px]  p-1">{users[0]?.firstName}</Title>
              <div>
                <Image
                  alt=""
                  src="/images/quote-icon.png"
                  width={60}
                  height={60}
                  className="bg-white rounded-full "
                />
                <button className=" absolute top-4 right-5  ">
                  <DeleteIcon />
                </button>
              </div>
            </div>

            <span className=" p-3">{review.review}</span>
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
