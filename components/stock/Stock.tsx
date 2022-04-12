import React from "react";
import { StyleSheet, View } from "react-native";
import Tooltip from "./TooltipComponent";
import Logo from "../components/Logo";
import Banner from "../components/Banner";
import HeadingComponent from "../components/Heading";
import useFns from "./useFns";
import StockList from "./StockList";
import Search from "../components/Search";

const Stock = () => {
  const {
    visibleState,
    navigation,
    displayToolKit,
    hideToolKit,
    clicked,
    searchPhrase,
    handleClicked,
    infoMsg,
    handleChange,
    clearSearchField,
    displaySearchBar,
    loading,
  } = useFns();

  //
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => hideToolKit());
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Logo />
        <Banner />
        <View style={styles.container}>
          <HeadingComponent title="Stock/Catalog" />
          <Tooltip
            openToolTip={displayToolKit}
            closeToolTip={hideToolKit}
            visible={visibleState}
          />
        </View>
        {!loading && displaySearchBar && (
          <Search
            infoMsg={infoMsg}
            clearSearchField={clearSearchField}
            searchPhrase={searchPhrase}
            handleChange={handleChange}
            placeholder="Search by Category or Name"
            clicked={clicked}
            handleClicked={handleClicked}
          />
        )}
      </View>
      <StockList />
    </View>
  );
};

export default Stock;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
    padding: 10,
  },
});
