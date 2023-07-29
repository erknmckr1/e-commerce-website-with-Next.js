import React from "react";
import { useFormik } from "formik";
import Title from "../ui/Title";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
function AddProduct({ setIsVisible }) {
  const [imageSrc, setImageSrc] = useState();
  const [imageFile, setImageFile] = useState();

  const {values,handleSubmit,handleChange,handleBlur,resetForm} = useFormik({
    initialValues:{
        title:"",
        description:"",
        category:"",
        price:"",
        amount:""
    }
  })
  console.log(values)
  //! FileReader
  const handleFileChange = (changeEvent) => {
    const reader = new FileReader();

    //! Gelen dosyayı base64 formatında oku
    reader.readAsDataURL(changeEvent.target.files[0]);

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setImageFile(changeEvent.target.files[0]);
    };
  };
  
  const createProduct  = async () => {
    //! cloudinary de upload present olustur.
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "ecommerce");


    try {
        
        const uploadImg = await axios.post(
          "https://api.cloudinary.com/v1_1/dtar4nbiw/image/upload",
          data
        );
        const { url } = uploadImg.data;
  
        const productInfo = {
          title: values.title,
          description: values.description,
          category: values.category,
          extras: values.extras,
          price: values.price,
          amount:values.amount,
          image: url,
        };
        
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/product`,
          productInfo
        );
  
        if (res.status === 200) {
          toast.success("Product already created!");
          setImageSrc("");
          setImageFile("");
          resetForm();
        }
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div className="w-screen h-screen absolute z-50 top-0 left-0 bg-white bg-opacity-40">
      <div className="flex sm:mt-20 justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[500px] lg:w-[600px] h-[600px] bg-slate-100      rounded-xl ">
          {/* title */}
          <div className="w-full flex px-10 justify-between items-center border-b-2">
            <div className="w-full h-full flex items-center gap-x-5 ">
              <Title addProps=" py-5 text-[30px] lg:text-[40px]">
                Add Product
              </Title>
              <EmojiFlagsIcon />
            </div>
            <CloseIcon onClick={() => setIsVisible((prev) => !prev)} />
          </div>
          {/* upload img */}
          <div className="flex flex-col w-full py-5 px-10">
            <label className="flex gap-2 items-center">
              <input
                type="file"
                onChange={(e) => handleFileChange(e)}
                className="hidden"
              />
              <button className="btn !rounded-none !bg-blue-600 pointer-events-none">
                Choose an Image
              </button>
              {imageSrc && (
                <div>
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src={imageSrc}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </div>
              )}
            </label>
          </div>
          <div className="flex flex-col gap-y-5 px-8">
            {/* title */}
            <div className="w-full flex flex-col gap-y-1 ">
              <p className="text-sm font-semibold">Title</p>
              <input
                placeholder="Write Title"
                className=" border-secondary border-2 p-2 rounded-lg text-primary"
                value={values.title}
                name="title"
                onChange={handleChange}
              />
            </div>
            {/* descriptıon */}
            <div className="w-full flex flex-col gap-y-1 ">
              <p className="text-sm font-semibold">Description</p>
              <textarea
                placeholder="Write Description"
                className=" border-secondary h-20 border-2 p-2 rounded-lg text-primary"
                value={values.description}
                name="description"
                onChange={handleChange}
              />
            </div>
            {/* categpry && price */}
            <div className="w-full flex items-center justify-between">
              <div className="w-1/2 flex flex-col gap-y-1">
                <p className="text-sm font-semibold"> Category </p>
                <select
                  className=" border-secondary border-2 p-2  rounded-lg text-primary "
                  name="category"
                  onChange={handleChange}
                  value={values.category}
                >
                  <option value="phone">Phone</option>
                  <option value="television">Television</option>
                  <option value="Watch">Watch</option>
                  <option value="earphones">Earphones</option>
                </select>
              </div>

              <div className="flex flex-col gap-y-1">
                <p className="text-sm font-semibold">Price</p>
                <input
                  type="number"
                  className=" border-secondary border-2 p-2 rounded-lg text-primary"
                  placeholder="Price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* amount & create button */}
            <div className="flex items-end justify-between  w-full">
              <div className="w-1/2 flex flex-col gap-y-1">
                <p className="text-sm font-semibold ">Amount</p>
                <input
                  type="number"
                  className=" border-secondary border-2 p-2 rounded-lg text-primary"
                  placeholder="Amount"
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" onClick={createProduct} className="btn">Add Product</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
