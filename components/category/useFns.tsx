import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCategories } from "../../redux/StockSlice";
import { getCategories } from "../../redux/others/stock";
import { url } from "../../utils";

const UseFns = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const onChangeSearch = (query: string) => {
    dispatch(filterCategories(query));
    setSearchQuery(query);
  };

  const { categories, infoMsg, categoriesStore } = useSelector(
    (state: RootState) => state.stock
  );
  const { user, token } = useSelector((state: RootState) => state.user);

  const handleSubmit = (values: { category: string }) => {
    setLoading(true);
    axios
      .post(
        `${url}/api/v1/productCategories`,
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
        }
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
    categoriesStore,
    searchQuery,
    onChangeSearch,
    infoMsg,
    loading,
    error,
    handleSubmit,
    dispatch,
    user,
    getCategories,
    token,
  };
};

export default UseFns;
