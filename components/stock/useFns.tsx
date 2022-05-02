import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filterStock } from "../../redux/StockSlice";
import { RootState } from "../../redux/Store";

const UseFns = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [clicked, setClicked] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [visibleState, setVisibleState] = React.useState(false);
  const { infoMsg, store, loading } = useSelector(
    (state: RootState) => state.stock
  );
  const handleClicked = () => setClicked(true);
  const displayToolKit = () => {
    setVisibleState(true);
  };
  const hideToolKit = () => {
    setVisibleState(false);
  };
  const handleChange = (val: string) => {
    setSearchPhrase(val);
    dispatch(filterStock(val));
  };

  const clearSearchField = () => {
    setSearchPhrase("");
    Keyboard.dismiss();
    setClicked(false);
    dispatch(filterStock(""));
  };
  const displaySearchBar = store.length > 0 ? true : false;
  return {
    visibleState,
    navigation,
    displayToolKit,
    hideToolKit,
    clicked,
    searchPhrase,
    loading,
    handleClicked,
    infoMsg,
    handleChange,
    clearSearchField,
    displaySearchBar,
  };
};

export default UseFns;
