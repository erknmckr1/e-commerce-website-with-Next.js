import * as Yup from "yup";

const UserInformationSchema = Yup.object({
  firstname: Yup.string().required("First Name is required!"),
  lastname: Yup.string().required("Last Name is required!"),
  email: Yup.string().required("Email is required!"),
  phoneNumber:Yup.string().required("Phone Number is required!"),
  currentPassword: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match."),
});

export default UserInformationSchema