import React from "react";
import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import LoginSchema from "@/schema/login";
import Link from "next/link";
function login() {
  const OnSubmit = () => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
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
            <Link className="hover:underline" href="/auth/register">Do not have an account ? </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default login;
