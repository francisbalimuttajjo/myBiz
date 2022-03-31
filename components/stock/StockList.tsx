import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import EmptyNotification from "../components/Empty";
import StockComponent from "./StockItem";

const StockList = () => {
  const { stock } = useSelector((state: RootState) => state.stock);
  return (
    <View style={styles.container}>
      {stock.length < 1 && (
        <EmptyNotification title=" Start Adding stock by tapping the +Add Item" />
      )}

      {stock.length > 0 && (
        <FlatList
          style={styles.flatList}
          data={stock}
          renderItem={(item) => <StockComponent item={item.item} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default StockList;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 500,
    paddingBottom: 16,
  },
  flatList: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e1e2",
    flex: 1,
  },
});
