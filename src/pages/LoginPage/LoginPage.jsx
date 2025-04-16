import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setLoginThunk } from "../../reducers/authReducerjs";

function LoginPage() {
    const dispatch = useDispatch()
    const login = ({email, password}) => {
        dispatch(setLoginThunk(email, password))
    }
  return (
    <div>
      <Formik initialValues={{
        email: "",

      }}
         onSubmit={(value) => login(value)}
      >
        <Form>
          <Field name="email" placeholder="email" />
          <Field type="password" name="password" placeholder="password" />
          <button>Sign in</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginPage;
