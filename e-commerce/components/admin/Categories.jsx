import React, { useEffect } from "react";
import Title from "../ui/Title";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  //!Create Category
  const createCategory = async () => {
    try {
      const category = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/category`,
        { title: categoryInput }
      );
      if (category.status === 200) {
        toast.success(`${categoryInput} category added!`);
      }
      if (category.status === 400) {
        toast.error(`${categoryInput} is already added!`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //! Get Categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/category`
        );
        setCategories(categories.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  //! del category
  const handleDelete = async (id) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/category/${id}`
      );
      if(res.status===200){
        toast.success("Category deleted!")
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(categories);
  return (
    <div className="flex-1 min-h-[510px] w-full">
      <div className="flex justify-center ">
        <div className="w-[800px] flex flex-col">
          <Title addProps="text-[40px] pb-10">Categories</Title>
          {/* add category input  */}
          <div className="flex justify-between gap-x-2">
            <input
              className="border-secondary border-2 p-2 w-full text-primary"
              type="text"
              placeholder="Add New Category"
              onChange={handleChange}
              value={categoryInput}
              defaultValue=""
            />
            <button onClick={createCategory} className="btn w-28">
              ADD
            </button>
          </div>
          {/* category list */}
          <div className=" overflow-y-auto  max-h-[310px] ">
            <div className="w-full flex flex-col mt-2">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className=" hover:bg-white cursor-pointer bg-slate-200 items-center px-10 border-b-black  border-2 gap-y-1 w-full h-[70px] flex justify-between"
                >
                  <p>{category._id.substring(0, 5)}...</p>
                  <p className="text-xl font-semibold">{category.title}</p>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="btn"
                  >
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
