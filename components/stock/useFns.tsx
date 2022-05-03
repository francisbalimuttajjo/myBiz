import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterStock } from "../../redux/StockSlice";
import { RootState } from "../../redux/Store";

const UseFns = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [visibleState, setVisibleState] = React.useState(false);
  const { infoMsg, store, loading } = useSelector(
    (state: RootState) => state.stock
  );

  const displayToolKit = () => {
    setVisibleState(true);
  };
  const hideToolKit = () => {
    setVisibleState(false);
  };

  const onChangeSearch = (query: string) => {
    dispatch(filterStock(query));
    setSearchQuery(query);
  };

  const displaySearchBar = store.length > 0 ? true : false;
  return {
    searchQuery,
    onChangeSearch,
    visibleState,
    navigation,
    displayToolKit,
    hideToolKit,
    infoMsg,
    displaySearchBar,
    loading,
  };
};

export default UseFns;
