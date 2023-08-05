import React from "react";
import Title from "../ui/Title";
import Input from "../ui/Input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { useState } from "react";
import UserInformationSchema from "@/schema/userInformation";
import { toast } from "react-hot-toast";
import axios from "axios";
function UserInfo({ user }) {
  const [checkboxState, setCheckboxState] = useState({
    Woman: false,
    Man: false,
  });

  const handleCheckboxChange = (checkboxName, event) => {
    setCheckboxState((prevState) => ({
      ...prevState,

      Woman: checkboxName === "Woman" ? event.target.checked : false,
      Man: checkboxName === "Man" ? event.target.checked : false,
    }));
    values.gender = checkboxName;
  };

  //! Updated Informatıon
  const onSubmit = async (values) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${user.user._id}`,
        values
      );
      if(res.status===200){
        toast.success("User Information Updated!")
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  const { handleBlur, handleChange, handleSubmit, touched, values, errors } =
    useFormik({
      initialValues: {
        firstName: user.user?.firstName,
        lastName: user.user?.lastName,
        phoneNumber: user.user?.phoneNumber,
        day: user.user?.day || 1,
        mounth: user.user?.mounth || 1,
        year: user.user?.year || 1998,
        gender: user.user?.gender || null,
        password: "",
        confirmPassword: "",
        email: user.user?.email,
      },
      onSubmit: onSubmit,
      validationSchema: UserInformationSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Your First Name",
      value: values?.firstName || "",
      errorMessage: errors?.firstName,
      touched: touched?.firstName,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Your Last Name",
      value: values?.lastName || "",
      errorMessage: errors.lastName,
      touched: touched.lastName,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone Number",
      value: values?.phoneNumber || "",
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Your Current Password",
      value: values?.password || "",
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your New Password Confirm",
      value: values?.confirmPassword || "",
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values?.email || "",
      errorMessage: errors.email,
      touched: touched.email,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex-1 sm:ml-3">
      <Title addProps="px-10 py-5 text-[25px] font-semibold  text-center sm:text-start">
        User Information
      </Title>
      <div className="flex flex-col sm:flex-row p-10 w-full border-2 gap-x-2">
        {/* left side  */}

        <div className="w-full sm:w-1/2 flex flex-col gap-y-3  p-1 ">
          {/* name */}
          <div className="flex w-full gap-x-5 ">
            <label className="flex flex-col gap-y-2">
              <p className="text-xs font-semibold">Name</p>
              <Input
                {...inputs[0]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <label className="flex flex-col gap-y-2">
              <p className="text-xs font-semibold">Last Name</p>
              <Input
                {...inputs[1]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          {/* phone number */}
          <label className="flex flex-col gap-y-2">
            <p className="text-xs font-semibold">Phone Number</p>
            <Input {...inputs[2]} onChange={handleChange} onBlur={handleBlur} />
          </label>
          {/* email */}
          <label className="flex flex-col gap-y-2">
            <p className="text-xs font-semibold">Email</p>
            <Input {...inputs[5]} onChange={handleChange} onBlur={handleBlur} />
          </label>
          {/* dogum tarıhı */}
          <label className="">
            <p className="text-xs font-semibold py-1">Doğum Tarihiniz</p>
            <div className="flex gap-x-3 justify-evenly sm:justify-normal">
              <Box className="w-16 sm:w-28">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.day}
                    label="Day"
                    onChange={handleChange}
                    name="day"
                  >
                    {Array.from({ length: 32 }, (_, index) => (
                      <MenuItem key={index} value={index + 1}>
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box className="w-16 sm:w-28">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Ay</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.mounth}
                    label="Mounth"
                    onChange={handleChange}
                    name="mounth"
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <MenuItem key={index} value={index + 1}>
                        {index + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box className="w-16 sm:w-28">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Yıl</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.year}
                    label="Year"
                    onChange={handleChange}
                    name="year"
                  >
                    {Array.from({ length: 120 }, (_, index) => (
                      <MenuItem key={index} value={index + 1888}>
                        {index + 1888}
                      </MenuItem>
                    )).reverse()}
                    .
                  </Select>
                </FormControl>
              </Box>
            </div>
          </label>
          {/* gender */}
          <div className="w-full">
            <p className="text-xs font-semibold">Cinsiyetiniz</p>
            <FormGroup className=" flex w-full">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.Man}
                    onChange={() => handleCheckboxChange("Man", event)}
                  />
                }
                label="Man"
                name="gender"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.Woman ? true : false}
                    onChange={() => handleCheckboxChange("Woman", event)}
                  />
                }
                label="Woman"
                name="gender"
              />
            </FormGroup>
          </div>
        </div>
        {/* right side */}

        <div className="w-full sm:w-1/2 flex flex-col gap-y-3  p-1 px-2 border-l-2 relative">
          <label  className="flex flex-col gap-y-2 ">
            <p className="text-xs font-semibold ">Mevcut Şifre</p>
            <Input {...inputs[3]} onChange={handleChange} onBlur={handleBlur} />
          </label>
          <label  className="flex flex-col gap-y-2 ">
            <p className="text-xs font-semibold ">Confirm Password</p>
            <Input {...inputs[4]} onChange={handleChange} onBlur={handleBlur} />
          </label>
          <div className=" absolute sm:bottom-0 -bottom-10 ">
            <button type="submit"  className="btn">UPDATE</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserInfo;
