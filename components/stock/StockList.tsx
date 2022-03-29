import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import EmptyNotification from "../components/Empty";
import StockComponent from "./StockItem";

const StockList = () => {
  const { stock } = useSelector((state: RootState) => state.stock);
  return (
    <View>
      {stock.length < 1 && (
        <EmptyNotification title=" Start Adding stock by tapping the +Add Item" />
      )}

      {stock.length > 0 && (
        <FlatList
          data={stock}
          renderItem={(item) => <StockComponent item={item.item} />}
          keyExtractor={(item) => item._id}
        />
      )}
      {/* <ScrollView
                  nestedScrollEnabled={true}
            //    style={{ ...styles.flatlist, height: 100 }}
           >
                  {stock.map((item) => (
                    <StockComponent item={item} />
                  ))}
                </ScrollView> */}
    </View>
  );
};

export default StockList;
