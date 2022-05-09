import axios from "axios";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/StockSlice";
import { RootState } from "../../redux/Store";

const UseFns = (id: number, title: string) => {
  const navigation = useNavigation();
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const initialValues = { category: title };
  const dispatch = useDispatch();
  const handleSubmit = (values: { category?: string }) => {
    setLoading(true);
    axios
      .patch(`http://192.168.43.96:5000/api/v1/categories/${id}`, {
        title: values.category,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          dispatch(getCategories({ user: user.email }));
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
      .delete(`http://192.168.43.96:5000/api/v1/categories/${id}`)
      .then((res) => {
        setLoading(false);
        if (res.data.status === "success") {
          dispatch(getCategories({ user: user.email }));
          navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
      });
  };
  return { loading, handleSubmit, handleDelete, initialValues, error };
};

export default UseFns;
