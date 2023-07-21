
import { useFormik } from "formik";
import Title from "./ui/Title";
import ContactSchema from "@/schema/contact";
import Input from "./ui/Input";
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import { useState } from "react";
function Contact() {
  const [text, setText] =useState('');
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const OnSubmit = () =>{
    alert(JSON.stringify(values, null, 2));
    resetForm();
  }
  const { values, handleBlur, handleChange, handleSubmit, touched, errors,resetForm } =
    useFormik({
      initialValues: {
        userName: "",
        email: "",
        phoneNumber: "",
        message: text,
      },
      validationSchema: ContactSchema,
      onSubmit:OnSubmit
    });
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Your User Name",
      value: values.userName,
      errorMessage: errors.userName,
      touched: touched.userName,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
  ];
  
  return (
    <div className="container mx-auto py-24">
      <Title addProps="w-full text-center text-[40px] font-bold pb-10">Contact Us</Title>
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center  gap-10  ">
        <form onSubmit={handleSubmit} className=" w-full sm:w-[600px]  p-10">
          <div className="w-full flex flex-col gap-y-3 ">
            {inputs.map((ınput) => (
              <Input key={ınput.id} {...ınput} onChange={handleChange} onBlur={handleBlur} />
            ))}
          </div>
          <Textarea
      placeholder="Type in here…"
      className="mt-3 border-secondary"
      value={text}
      onChange={(event) => setText(event.target.value)}
      minRows={2}
      maxRows={4}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
            👍
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
            🏖
          </IconButton>
          <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: 'auto' }}>
          {text.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
          <button type="submit" className="btn mt-5 h-12 w-20">SEND</button>
        </form>
        <div className=" px-2 sm:px-0 w-full sm:w-[600px] h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
