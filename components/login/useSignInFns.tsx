import axios from "axios";
import { addUser } from "../../redux/UserSlice";
import { useDispatch } from "react-redux";
import React from "react";
import * as Yup from "yup";

const UseFns = () => {
  const dispatch = useDispatch();
  const [secureText, setSecureText] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMsg, setErrorMessage] = React.useState<string>("");

  const toggleSecureText =()=> setSecureText(!secureText);

  const handleSubmit = (values: { Email: string; Password: string }) => {
    setLoading(true);
    axios
      .post(`http://192.168.43.96:5000/api/v1/users/login`, {
        email: values.Email,
        password: values.Password,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          const { firstName, lastName, email, image } = res.data.data;
          dispatch(addUser({ user: { firstName, lastName, email, image } }));
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrorMessage(err.response.data.data);
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
  });
  const initialValues = { Email: "", Password: "" };
  return {
    loading,
    secureText,
    errorMsg,
    validationSchema,
    initialValues,
    toggleSecureText,
    handleSubmit,
  };
};
export default UseFns;
