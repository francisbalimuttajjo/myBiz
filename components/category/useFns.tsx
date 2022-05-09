import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCategories } from "../../redux/StockSlice";
import * as Yup from "yup";
import axios from "axios";

const UseFns = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const onChangeSearch = (query: string) => {
    dispatch(filterCategories(query));
    setSearchQuery(query);
  };

  const { categories, infoMsg } = useSelector(
    (state: RootState) => state.stock
  );
  const { user } = useSelector((state: RootState) => state.user);

  const handleSubmit = (values: { category: string }) => {
    console.log(values);
    setLoading(true);
    axios
      .post(`http://192.168.43.96:5000/api/v1/categories`, {
        title: values.category,
        user: user.email,
      })
      .then((res) => {
        // if (res.data.status === "success") {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };

  const validationSchema = Yup.object().shape({
    category: Yup.string()
      .trim()
      .required("field is required")
      .label("category"),
  });
  return {
    validationSchema,
    categories,
    searchQuery,
    onChangeSearch,
    infoMsg,
    loading,
    error,
    handleSubmit,
  };
};

export default UseFns;
