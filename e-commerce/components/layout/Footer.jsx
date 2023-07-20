import Title from "../ui/Title";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
function Footwer() {
  return (
    <div className="w-screen sm:pt-24 sm:h-[430px] h-auto bg-[#1E1E1E] text-white ">
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col justify-between h-full w-full">
          <div className="w-full h-full  flex flex-col sm:flex-row justify-center text-center  ">
            {/* logo */}
            <div className="w-full sm:w-[285px] h-[150px] sm:h-[220px] justify-center px-[15px] flex items-center">
              <Title addProps="text-[35px] font-bold ">LOGO</Title>
            </div>
            {/* About Us */}
            <div className="flex flex-col  w-full sm:w-[285px] sm:h-[220px] px-[15px]">
              <Title addProps="text-[25px] font-semibold pb-2">About Us</Title>
              <p className="mr-[20px] mb-[20px] tracking-wider">
                dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                veniam, quisdotempor incididunt r
              </p>
            </div>
            {/* Contact Us */}
            <div className="flex flex-col  w-full sm:w-[285px] sm:h-[220px] px-[15px]">
              <Title addProps="text-[25px] font-semibold pb-2">Contact Us</Title>
              <p className="mr-[20px] mb-[20px] tracking-wider">
                dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                veniam, quisdotempor incididunt r
              </p>
            </div>
           
            {/* Newsletter */}
            <div className="flex flex-col  w-full sm:w-[285px]  h-[200px] sm:h-[220px] px-[15px]">
              <Title addProps="text-[25px] font-semibold pb-2">Newsletter</Title>
              <div className="h-full flex flex-col justify-evenly">
                <input className="h-10 rounded-full w-full  placeholder:text-center" placeholder="Enter Your Mail" />
                <div>
                <button className="btn rounded-full">subscribe</button>
                </div>
                <div className="w-full flex justify-center">
                <Link className="p-2 mx-1 rounded-full hover:scale-110 transition-all bg-primary hover:text-secondary" href="#" ><FacebookIcon/></Link>
                <Link className="p-2 mx-1  rounded-full hover:scale-110 transition-all  bg-primary hover:text-secondary" href="#" ><LinkedInIcon/></Link>
                <Link className="p-2 mx-1  rounded-full hover:scale-110 transition-all  bg-primary hover:text-secondary" href="#" ><TwitterIcon/></Link>
                <Link className="p-2 mx-1  rounded-full hover:scale-110 transition-all  bg-primary hover:text-secondary" href="#" ><InstagramIcon/></Link>
                <Link className="p-2 mx-1  rounded-full hover:scale-110 transition-all  bg-primary hover:text-secondary" href="#" ><EmailIcon/></Link>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
           <div className="flex justify-center items-center  h-full">
            <p className="border-t-2 w-full text-center pt-3">Copyright 2023 All Right Reserved Free Html Templates</p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Footwer;
