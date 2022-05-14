import React from "react";

import * as Yup from "yup";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../../redux/UserSlice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const Usefns = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const initialValues = { currentPassword: "", newPassword: "" };

  const { user, token } = useSelector((state: RootState) => state.user);

  const handleSubmit = async (values: {
    currentPassword: string;
    newPassword: string;
  }) => {
    setLoading(true);
    const { currentPassword, newPassword } = values;

    try {
      const res = await axios.post(
        "http://192.168.43.96:5000/api/v1/users/updatePassword",
        {
          currentPassword,
          newPassword,
          email: user.email,
        },
        { headers: { "Content-Type": "application/json", token } }
      );
      if (res.data.status === "success") {
        await AsyncStorage.removeItem("token");
        dispatch(logout());
      }
    } catch (err: any) {
      setLoading(false);
      setError(err.response.data.data);
    }
  };
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .trim()
      .required("Field is required")
      .label("currentPassword"),
    newPassword: Yup.string()
      .trim()
      .required("Field is required")
      .label("newPassword"),
  });
  return { loading, error, initialValues, validationSchema, handleSubmit };
};

export default Usefns;
