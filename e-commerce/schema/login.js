import * as Yup from 'yup';

const LoginSchema = Yup.object({
    email:Yup.string().required("Required"),
    password:Yup.string().required("Required")
})

export default LoginSchema