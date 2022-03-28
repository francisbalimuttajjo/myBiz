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


const Stock = () => {
  const { visibleState, navigation, displayToolKit, hideToolKit } = useFns();
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
          <HeadingComponent title="Stock/Catolog" />
          <Tooltip
            openToolTip={displayToolKit}
            closeToolTip={hideToolKit}
            visible={visibleState}
          />
        </View>
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
