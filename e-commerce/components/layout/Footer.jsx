import Title from "../ui/Title";
import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import PhoneIcon from "@mui/icons-material/Phone";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import SubsSchema from "@/schema/subs";

function Footwer() {
  const [footer, setFooter] = useState([]);

  const lınkIcons = [
    { value: "Facebook", name: "Facebook", icon: <FacebookIcon /> },
    { value: "LinkedIn", name: "Linkedin", icon: <LinkedInIcon /> },
    { value: "Instagram", name: "Instagram", icon: <InstagramIcon /> },
    { value: "Twitter", name: "Twitter", icon: <TwitterIcon /> },
    { value: "Gmail", name: "Gmail", icon: <EmailIcon /> },
  ];

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);

 
  //! Create Subscribe
  const createSubscribe = async () => {
    try {
      if (values.email) {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/subscribe`,
          {email:values.email}
        );
        if (res.status === 200) {
          toast.success("Subscribe created!");
          values.email=""
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const {values,handleChange,handleBlur,touched,errors,handleSubmit} = useFormik({
    initialValues:{
      email:""
    },
    validationSchema:SubsSchema,
    onSubmit:createSubscribe
  })
  
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
                {footer.desc}
              </p>
            </div>
            {/* Contact Us */}
            <div className="flex flex-col  w-full sm:w-[285px] sm:h-[220px] px-[15px]">
              <Title addProps="text-[25px] font-semibold pb-2">
                Contact Us
              </Title>
              <div className="flex items-center ">
                <span className="mr-[20px] mb-[20px] tracking-wider">
                  <LocationOnIcon />
                </span>
                <span className="mr-[20px] mb-[20px] tracking-wider">
                  {footer.location}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="mr-[20px] mb-[20px] tracking-wider">
                  <PhoneIcon />
                </span>
                <span className="mr-[20px] mb-[20px] tracking-wider">
                  {footer.phoneNumber}
                </span>
              </div>
              <div className="flex items-center ">
                <span className="mr-[20px] mb-[20px] tracking-wider">
                  <EmailIcon />
                </span>
                <span className="mr-[20px] mb-[20px] tracking-wider">
                  {footer.email}
                </span>
              </div>
            </div>
            {/* Newsletter */}
            <div className="flex flex-col  w-full sm:w-[285px]  h-[200px] sm:h-[220px] px-[15px]">
              <Title addProps="text-[25px] font-semibold pb-2">
                Newsletter
              </Title>
              <form onSubmit={handleSubmit} className="h-full flex flex-col justify-evenly text-black">
                <input
                  className="h-10 px-2 rounded-full w-full  placeholder:text-center"
                  placeholder="Enter Your Mail"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="btn rounded-full"
                  >
                    subscribe
                  </button>
                </div>
                {/* show if the icons match    */}
                <div className="w-full flex justify-center">
                  {footer.links?.map((item, index) => {
                    const matched = lınkIcons.find(
                      (icon) => icon.name === item.name
                    );
                    if (matched) {
                      return (
                        <Link
                          key={index}
                          className="p-2 mx-1 rounded-full hover:scale-110 transition-all bg-primary hover:text-secondary"
                          href="#"
                        >
                          {matched.icon}
                        </Link>
                      );
                    }
                  })}
                </div>
              </form>
            </div>
          </div>
          {/* Copyright */}
          <div className="flex justify-center items-center  h-full">
            <p className="border-t-2 w-full text-center pt-3">LOGO 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footwer;
