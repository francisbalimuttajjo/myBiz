import React from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filterStock } from "../../redux/StockSlice";
import { RootState } from "../../redux/Store";

const useSearchFns = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const { infoMsg } = useSelector((state: RootState) => state.stock);
  const handleClicked = () => setClicked(true);

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
    return {clicked,searchPhrase,handleClicked,infoMsg,handleChange,clearSearchField}
};

export default useSearchFns;
