import { Field, ErrorMessage as Error } from "formik";
import "./Input.css";

export const Input = ({ id, label, name, placeholder }) => {
  return (
    <div>
      <div className="login_wrap">
        <label htmlFor={id}>{label}</label>
        <Field name={name} id={id} placeholder={placeholder} />
        <Error name={name}>{(error) => <span className="error_text">{error}</span>}</Error>
      </div>
    </div>
  );
};
