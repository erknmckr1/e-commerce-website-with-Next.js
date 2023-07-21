/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useFormik } from 'formik'
import Input from '@/components/ui/Input'
import Title from '@/components/ui/Title'
import Link from 'next/link'
import RegisterSchema from '@/schema/register'
function register() {
    const OnSubmit = () => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      };

    const {values,touched,handleBlur,handleChange,resetForm,handleSubmit,errors} = useFormik({
        initialValues:{
            userName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        validationSchema:RegisterSchema,
        onSubmit: OnSubmit

    })

    const inputs = [
        {
            id:1,
            type:"text",
            name:"userName",
            placeholder:"Your User Name",
            touched:touched.userName,
            value:values.userName,
            errorMessage:errors.userName
        },
        {
            id:2,
            type:"text",
            name:"email",
            placeholder:"Your Email",
            touched:touched.email,
            value:values.email,
            errorMessage:errors.email
        },
        {
            id:3,
            type:"password",
            name:"password",
            placeholder:"Your Password",
            touched:touched.password,
            value:values.password,
            errorMessage:errors.password
        },
        {
            id:4,
            type:"password",
            name:"confirmPassword",
            placeholder:"Confirm Password",
            touched:touched.confirmPassword,
            value:values.confirmPassword,
            errorMessage:errors.confirmPassword
        }
    ]
  return (
    <div className='container mx-auto flex flex-col items-center min-h-[calc(100vh_-_510px)] '>
        <Title addProps="text-[40px] py-3">Register</Title>
        <form
        onSubmit={handleSubmit}
        className=" w-full sm:w-[600px] flex justify-center "
      >
        <div className="flex flex-col w-full px-3  gap-y-3">
          {inputs.map((input) => (
            <Input
              key={input.id}
              onChange={handleChange}
              onBlur={handleBlur}
              {...input}
            />
          ))}
          <button type="submit" className="btn">
            REGİSTER
          </button>
          <div className="flex w-full justify-start">
            <Link className="hover:underline" href="/auth/login">Do you have an account ? </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default register