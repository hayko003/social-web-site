import * as Yup from "yup"

const regx = {
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
}

const email = Yup.string()
.matches(regx.email,"Your Email must be contain @..." )
.required("Please enter your Email")

const password = Yup.string()
.matches(regx.password, "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character")
.required("Please enter your password")

export const schemas = {
    custom: Yup.object().shape({
        email,
        password
    })
}

export const initValues = {
    email:"",
    password: "",
}