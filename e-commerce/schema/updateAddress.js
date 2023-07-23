import * as Yup from "yup";

const updateAddressSchema = Yup.object({
  firstname: Yup.string().required("First Name is required!"),
  lastname: Yup.string().required("Last Name is required!"),
  phoneNumber: Yup.string().required("Phone Number is required!"),
  city:Yup.string().required("City info is required!"),
  address:Yup.string().required("Address is required!"),
  addressTitle:Yup.string().required("Address title is required!")
});

export default updateAddressSchema