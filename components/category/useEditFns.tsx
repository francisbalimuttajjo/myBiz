import axios from "axios";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/others/stock";
import { RootState } from "../../redux/Store";
import { url } from "../../utils";

const UseFns = (id: number | undefined, title: string | undefined) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [error, setError] = React.useState<string>("");

  const { user, token } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = React.useState<boolean>(false);

  const initialValues = { category: title };

  const handleSubmit = (values: { category?: string }) => {
    setLoading(true);
    axios
      .patch(
        `${url}/api/v1/productCategories/${id}`,
        {
          title: values.category,
          user: user.email,
        },
        { headers: { "Content-Type": "application/json", token } }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          dispatch(getCategories({ user: user.email, token }));
          navigation.goBack();
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(
        `${url}/api/v1/productCategories/${id}`,
        //`http://192.168.43.96:5000/api/v1/productCategories/${id}`,
        {
          headers: { "Content-Type": "application/json", token },
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          dispatch(getCategories({ user: user.email, token }));
          navigation.goBack();
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return { loading, handleSubmit, handleDelete, initialValues, error };
};

export default UseFns;
