
import * as Yup from "yup";

const ContactSchema = Yup.object({
  userName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber:Yup.string().min(10,"Must be 11 characters or min").required("Required"),
  message:Yup.string().max(200,"Must be 200 characters or less")
});

export default ContactSchema ;
