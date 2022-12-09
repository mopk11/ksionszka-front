import React from "react";
import { getToken } from "../../service/user";

const LoginPage = () => {
  const onSubmit = (form) => {
    getToken({
      username: form.values.username,
      password: form.values.password,
    }).then((token) => localStorage.setItem("token", token));
  };

  // formik i yup
  return <div>Login</div>;
};

export default LoginPage;
