/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import axios from "axios";
import Input from "@/components/ui/Input";
import { adminSchema } from "@/schema/admin";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
function admin() {
  const { push } = useRouter();

  const onSubmit = async (values) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      const token = res.data.token;
      // Token'ı HTTP only cookie olarak sakla
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        sameSite: "strict",
        httpOnly: true,
      });

      const authenticated = res.data.authenticated;
      if (authenticated) {
        // Başarılı giriş sonrası kullanıcıyı istediğiniz sayfaya yönlendirin
        push("/admin/profile");
      } else {
        console.error("Kullanıcı doğrulanamadı.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: adminSchema,
      onSubmit: onSubmit,
    });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      value: values.username,
      placeholder: "Username",
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      type: "password",
      name: "password",
      value: values.password,
      placeholder: "Password",
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto flex  flex-col justify-center items-center min-h-[calc(100vh_-_510px)] ">
      <Title addProps="text-[40px] py-3">Admin Login</Title>
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
        </div>
      </form>
    </div>
  );
}

export default admin;
