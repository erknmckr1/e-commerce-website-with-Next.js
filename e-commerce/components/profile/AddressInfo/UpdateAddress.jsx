import React from "react";
import Title from "@/components/ui/Title";
import CloseIcon from "@mui/icons-material/Close";
import Input from "@/components/ui/Input";
import { useFormik } from "formik";
import updateAddressSchema from "@/schema/updateAddress";
function Update({setClose}) {

  const handleClick = () => {
    setClose(false);
  };

  const onSubmit = () =>{
    alert(JSON.stringify(values,null,2))
  }

  const {handleBlur,handleChange,touched,errors,values,handleSubmit} = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      phoneNumber:"",
      city:"",
      address:"",
      addressTitle:"",
    },
    validationSchema:updateAddressSchema,
    onSubmit:onSubmit
  })
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Your Name",
      value: values.firstname,
      errorMessage: errors.firstname,
      touched: touched.firstname,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Your Surname",
      value: values.lastname,
      errorMessage: errors.lastname,
      touched: touched.lastname,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
        id: 4,
        name: "city",
        type: "text",
        placeholder: "Your City",
        value: values.city,
        errorMessage: errors.city,
        touched: touched.city,
      },
      {
        id: 5,
        name: "address",
        type: "text",
        placeholder: "Your Address",
        value: values.address,
        errorMessage: errors.address,
        touched: touched.address,
      },
      {
        id: 6,
        name: "addressTitle",
        type: "text",
        placeholder: "Adress Title",
        value: values.addressTitle,
        errorMessage: errors.addressTitle,
        touched: touched.addressTitle,
      },
     
  ];
  return (
    <div className="absolute w-[400px] sm:w-full flex justify-center   bg-opacity-90 ">
      <div className="  flex justify-center w-full sm:w-[800px] p-2 bg-slate-100 bg-opacity-90   ">
        <div className="w-full sm:w-[600px] h-[600px] p-1   ">
          <div className="w-full p-5 flex justify-between bg-slate-100 border-b-2">
            <Title addProps="text-[20px] font-semibold">Edit Address</Title>
            <button onClick={handleClick}>
              <CloseIcon />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5">
            {/* name */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Name</span>
                <Input onChange={handleChange} onBlur={handleBlur} {...inputs[0]} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Surname</span>
                <Input onChange={handleChange} onBlur={handleBlur} {...inputs[1]} />
              </div>
            </div>
            {/* tel city */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Phone</span>
                <Input onChange={handleChange} onBlur={handleBlur} {...inputs[2]} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">City</span>
                <Input onChange={handleChange} onBlur={handleBlur} {...inputs[3]} />
              </div>
            </div>
            {/* address */}
            <div className="flex flex-col w-full">
            <p className="text-sm font-semibold">Address</p>
              <textarea
                className="bg-slate-100 !border-secondary border-2 p-1 w-full"
                name="address"
                id=""
                rows="5"
                onChange={handleChange}
                onBlur={handleBlur}
                {...inputs[4]}
              ></textarea>
              
            </div>
            {/* adress title */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold"> Adress Title</p>
              <Input onChange={handleChange} onBlur={handleBlur} {...inputs[5]} />
            </div>
            <div className="">
              <button className="btn">Saved</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
