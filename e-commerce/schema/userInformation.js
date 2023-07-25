import * as Yup from "yup";

const UserInformationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required!"),
  lastName: Yup.string().required("Last Name is required!"),
  email: Yup.string().required("Email is required!"),
  phoneNumber:Yup.string().required("Phone Number is required!"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match."),
});

export default UserInformationSchema