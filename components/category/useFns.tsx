import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCategories } from "../../redux/StockSlice";
import { Keyboard } from "react-native";
import * as Yup from "yup";

const UseFns = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");

  const handleChange = (val: string) => {
    setSearchPhrase(val);
    dispatch(filterCategories(val));
  };
  const handleClicked = () => setClicked(true);

  const clearSearchField = () => {
    setSearchPhrase("");
    Keyboard.dismiss();
    setClicked(false);
    dispatch(filterCategories(""));
  };

  const { categories, displayCategoriesSearchBar } = useSelector(
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
    clearSearchField,
    handleClicked,
    handleChange,
    clicked,
    searchPhrase,
  };
};

export default UseFns;
