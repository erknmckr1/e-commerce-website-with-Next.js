import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { useFormik } from "formik";
import Title from "../ui/Title";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
function Footer() {
  const [links, setLinks] = useState([]);
  const [footer, setFooter] = useState([]);

  const { values, errors, handleBlur, handleChange, touched } = useFormik({
    enableReinitialize: true,
    initialValues: {
      location: footer.location,
      desc: footer.desc,
      phoneNumber: footer.phoneNumber,
      email: footer.email,
      li: "https://",
      ic: "",
    },
  });
  //! ıcon lıst
  const lınkIcons = [
    { value: "Facebook", name: "Facebook", icon: <FacebookIcon /> },
    { value: "LinkedIn", name: "Linkedin", icon: <LinkedInIcon /> },
    { value: "Instagram", name: "Instagram", icon: <InstagramIcon /> },
    { value: "Twitter", name: "Twitter", icon: <TwitterIcon /> },
    { value: "Gmail", name: "Gmail", icon: <EmailIcon /> },
  ];
  //!ınputs
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
  ];

  //! add Link to state
  const addLink = async () => {
    if (
      links &&
      links.some((item) => item.name === values.ic && item.link === values.li)
    ) {
      return;
    } else {
      setLinks([...links, { link: values?.li, name: values.ic }]);
    }
  };

  //! Delete ıcon 
  const handleDeleteIcon = (iconName) => {
    const deleteIcon = links.filter((item)=>item.name !== iconName)
    setLinks(deleteIcon)
  }
  //! get footer
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
        setLinks(res.data[0].links)
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);

  //! create Footer
  const createFooter = async () => {
    const footerInfo = {
      location: values.location,
      email: values.email,
      links: links,
      phoneNumber: values.phoneNumber,
      desc: values.desc,
    };

    if (!footer) {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`,
          footerInfo
        );
        if (res.status === 200) {
          toast.success("Footer Created!");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_URL}/footer/${footer._id}`,
          footerInfo
        );
        if (res.status === 200) {
          toast.success("Updates Succesfully!");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="flex-1 sm:ml-3 ">
      <Title addProps="text-[30px] font-semibold">Footer</Title>
      <div className="w-full grid grid-cols-2 gap-3 p-5 ">
        {inputs.map((input) => (
          <Input
            {...input}
            key={input.id}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      {/* icons  */}
      <div className="mt-2 flex justify-between flex-col lg:flex-row p-5">
        <div className="flex gap-4 items-center">
          <Input onChange={handleChange} name="li" value={values.li} />
          <FormControl className="w-60">
            <InputLabel id="demo-simple-select-label">Icon</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={values.ic}
              name="ic"
              label="Icon"
              onChange={handleChange}
              className="border !border-primary !outline-none"
            >
              {lınkIcons.map((item, index) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <button onClick={addLink} type="button" className="btn w-24 h-10">
            Add
          </button>
        </div>
      </div>
      {/* icon list-- lıstIcons dızısınde de ki nesneler ıle verı tabanındakı nesnelerın name'i eslesıyorsa lıstIcons dızısınden ıcon'ları aldık   */}
      <div className="p-5 flex">
        {links && links?.map((item,index)=>{
            const matched = lınkIcons.find((icon)=> icon.name === item.name)
            if(matched){
                return(
                    <div key={index}>
                        <span>{matched.icon}</span>
                        <button onClick={()=>{handleDeleteIcon(item.name)}} className="text-primary"><DeleteIcon fontSize="xs"/></button>
                    </div>
                )
            }else{
                return null
            }
        })}
      </div>

      {/* updated btn */}
      <div className="p-5">
        <button onClick={createFooter} className="btn">
          Updated
        </button>
      </div>
    </div>
  );
}

export default Footer;
