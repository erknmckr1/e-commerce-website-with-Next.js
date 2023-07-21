import * as Yup from 'yup';

const RegisterSchema = Yup.object({
    userName:Yup.string().min(8,"Username must be at least 8 characters").required("Required"),
    email:Yup.string().required("Required"),
    password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
    confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match."),
})

export default RegisterSchema