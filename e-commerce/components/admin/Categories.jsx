import React from "react";
import Title from "../ui/Title";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Categories() {
    const [categoryInput,setCategory] = useState("");
    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    
    const createCategory = async () => {
        try {
            const category = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/category`,{title:categoryInput})
            if(category.status === 200){
                toast.success(`${categoryInput  } category added!`)
            }
            if(category.status===400){
                toast.error(`${categoryInput} is already added!`)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const categories = ["Phone","Television","Earphones","Swatch"]
  return (
    <div className="flex-1 max-h-[550px] w-full">
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
            <button onClick={createCategory} className="btn w-28">ADD</button>
          </div>
          {/* category list */}
          <div className="w-full flex flex-col overflow-y-auto mt-2 ">
            {categories.map((category,index)=>(
                <div className=" bg-slate-100 items-center px-10 border-secondary border-1 gap-y-1 w-full h-[70px] flex justify-between" key={index}>
                    <p className="text-xl font-semibold">{category}</p>
                    <button  className="btn">DELETE</button>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
