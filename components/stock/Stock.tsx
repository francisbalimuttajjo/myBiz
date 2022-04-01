import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { useIsFocused, useNavigation } from "@react-navigation/native";
// import { Picker } from "@react-native-picker/picker";
import Tooltip from "./TooltipComponent";
import Logo from "../components/Logo";
import Banner from "../components/Banner";
import HeadingComponent from "../components/Heading";
import useFns from "./useFns";
import StockList from "./StockList";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const Stock = () => {
  const { visibleState, navigation, displayToolKit, hideToolKit } = useFns();
  const { loading } = useSelector((state: RootState) => state.stock);
  //
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => hideToolKit());
    return unsubscribe;
  }, [navigation]);
  return (
    <View>
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
        {!loading && <Search />}
        <StockList />
      </View>
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
