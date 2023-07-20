import React from "react";
import Title from "./ui/Title";
import Image from "next/image";

function About() {
  return (
    <div className="w-screen h-auto lg:h-[656px] md:py-24 py-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex h-full flex-col lg:flex-row p-5">
            {/* left side */}
          <div className="py-10 md:py-20 md:px-14 px-5   md:w-[570px]  border border-black ">
            <Title addProps="text-[40px]  ">About Our Shop</Title>
            <p className="py-5 text-[16px] tracking-wider">
              About Our ShopIt is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              Content here, content here, making it look like readable English.
              Many desktop publishing packages and web
            </p>
            <button className="btn !bg-secondary">Read More</button>
          </div>
          {/* image side */}

          <div className=" md:w-[570px]  lg:relative mt-5  md:my-10 lg:right-10">
            <Image alt="" src="/images/ourshop.jpeg" width={570} height={570} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
