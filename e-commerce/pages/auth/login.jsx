/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import LoginSchema from "@/schema/login";
import Link from "next/link";
import { signIn, useSession, getSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "axios";
function login() {
  const { push } = useRouter();
  const { data: session } = useSession();
  
  const OnSubmit = async (values) => {
    //! signIn('credentials', { redirect: false, password: 'password' })
    const { email, password } = values;
    let options = { email, password, redirect: false };

    try {
      const res = await signIn("credentials", options);
      if (res.status === 200) {
        toast.success("Sign In!");
      } else {
        toast.error("Username or password is wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //! sayfa yonlendırme
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`);
        const user = res?.data.find(
          (user) => user.email === session?.user.email
        );
        push("/profile/"+ user._id)
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [push, session]);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: OnSubmit,
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "email",
      value: values.email,
      placeholder: "Your Email",
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      type: "password",
      name: "password",
      value: values.password,
      placeholder: "Your Password",
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto flex  flex-col justify-center items-center min-h-[calc(100vh_-_510px)] ">
      <Title addProps="text-[40px] py-3">Login</Title>
      <form
        onSubmit={handleSubmit}
        className=" w-full sm:w-[600px] flex justify-center "
      >
        <div className="flex flex-col w-full px-3  gap-y-5">
          {inputs.map((input) => (
            <Input
              key={input.id}
              onChange={handleChange}
              onBlur={handleBlur}
              {...input}
            />
          ))}
          <button type="submit" className="btn">
            LOGIN
          </button>
          <div className="flex w-full justify-start">
            <Link className="hover:underline" href="/auth/register">
              Do not have an account ?{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default login;

//! Sunucu taraflı calısır ve client yuklenmeden verı alısverısını yapmak ıcın kullanılır.
export const getServerSideProps = async ({req}) =>{
  //!getSession ile hali hazırda acık olan oturum bılgılerını aldık. 
  const session = await getSession({req})
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user`)
  const user = res?.data.find((user)=>user.email === session?.user.email)

  //! user ve session bilgileri var ise yonlendırme ıslemı yapacak
  if(user && session){
      return{
        redirect:{
          destination: "/profile/"+ user._id,
          parmanent:false
        }
      }
  };
  return{
    props:{
      user:user ? user.data:null
    }
  }
}
