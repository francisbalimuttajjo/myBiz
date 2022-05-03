import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCategories } from "../../redux/StockSlice";
import * as Yup from "yup";

const UseFns = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => {
    dispatch(filterCategories(query));
    setSearchQuery(query);
  };

  const { categories, displayCategoriesSearchBar, infoMsg } = useSelector(
    (state: RootState) => state.stock
  );

  const validationSchema = Yup.object().shape({
    category: Yup.string()
      .trim()
      .required("field is required")
      .label("category"),
  });
  return {
    validationSchema,
    categories,
    displayCategoriesSearchBar,
    searchQuery,
    onChangeSearch,
    infoMsg,
  };
};

export default UseFns;
