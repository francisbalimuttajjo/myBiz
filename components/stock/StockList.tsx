import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EmptyNotification from "../components/Empty";
const StockList = () => {
  return (
    <View>
      <EmptyNotification title=" Start Adding stock by tapping the +Add Item" />
    </View>
  );
};

export default StockList;
