import * as yup from 'yup';

const emailReg = /^\w+([-+_.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const formSchema = yup.object().shape({
    email: yup.string().matches(emailReg, { message: "Please enter a valid email"}).required("Email is a required field"),
    password: yup.string().matches(passwordReg, { message: "Password must be at least 5 characters, at least one number and one uppercase letter"}).required("Password is a required field"),
    confimPassword: yup.string().oneOf([yup.ref("password"), ''], "Passwords must match").required("Passwords must match")
})