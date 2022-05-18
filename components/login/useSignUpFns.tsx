import React from "react";
import * as Yup from "yup";
import axios from "axios";

type Props = {
  Email: string;
  Password: string;
  FirstName: string;
  LastName: string;
  PasswordConfirm: string;
};
const UseFns = () => {
  const [secureText, setSecureText] = React.useState<boolean>(true);
  const [secureTextConfirm, setSecureTextConfirm] =
    React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [msg, setMsg] = React.useState<string>("");

  const handleSubmit = (values: Props) => {
    setLoading(true);

    axios
      .post(
        //`https://team-francisbalimuttajjo-backendmybiz-5695-master-olxjr2ly7a-wm.a.run.app/api/v1/users/register`,
        "http://192.168.43.96:5000/api/v1/users/register",
        {
          email: values.Email,
          firstName: values.FirstName,
          lastName: values.LastName,
          password: values.Password,
          passwordConfirm: values.PasswordConfirm,
        }
      )
      .then(() => {
        setLoading(false);
        setError("");
        setMsg("Account created");
      })
      .catch((err) => {
        setLoading(false);
        setMsg("");
        setError(err.response.data.data);
      });
  };

  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .trim()
      .email("invalid Email")
      .required("Email is required")
      .label("Email"),

    Password: Yup.string()
      .trim()
      .required("Password is required")
      .label("Password"),
    PasswordConfirm: Yup.string()
      .trim()
      .oneOf([Yup.ref("Password"), ""], "Passwords don't match")
      .required("Password is required")
      .label("PasswordConfirm"),

    FirstName: Yup.string()
      .trim()
      .required("FirstName is required")
      .label("FirstName"),
    LastName: Yup.string()
      .trim()
      .required("LastName is required")
      .label("LirstName"),
  });

  const initialValues = {
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    PasswordConfirm: "",
  };

  return {
    initialValues,
    validationSchema,
    secureTextConfirm,
    setSecureTextConfirm,
    secureText,
    setSecureText,
    loading,
    error,
    handleSubmit,
    msg,
  };
};
export default UseFns;
