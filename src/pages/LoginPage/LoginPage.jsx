import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setLoginThunk } from "../../reducers/authReducer.js";
import { initValues, schemas } from "./helper";
import { Input } from "../Input/Input";
import "./LoginPage.css";

function LoginPage() {
  const dispatch = useDispatch();
  const login = ({ email, password }) => {
    dispatch(setLoginThunk(email, password));
  };
  return (
    <div className="login_form">
      <Formik
        initialValues={initValues}
        validationSchema={schemas.custom}
        onSubmit={(value) => login(value)}
      >
        <Form className="login_form_formik">
          <h1>
            Welcome to <br /> The FaceGram
          </h1>
          <div className="input_wrap">
            <Input className="input_wrap_validation" name="email" id="email" placeholder="Write your email" />
            <Input className="input_wrap_validation" name="password" id="password" placeholder="Password" />
            <button className="signIn_btn">Sign in</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
