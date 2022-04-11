import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import EmptyNotification from "../components/Empty";
import LoadingComponent from "../components/LoadingComponent";
import StockComponent from "./StockItem";

const StockList = () => {
  const { availableStock, loading } = useSelector(
    (state: RootState) => state.stock
  );

  return (
    <View>
      {availableStock.length < 1 && !loading && (
        <View>
          <EmptyNotification title=" Start Adding stock by tapping the +Add Item" />
        </View>
      )}
      {loading && <LoadingComponent />}
      {availableStock.length > 0 && !loading && (
        <FlatList
          contentContainerStyle={{ paddingBottom: "80%", marginTop: "5%" }}
          data={availableStock}
          renderItem={(item) => <StockComponent item={item.item} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default StockList;
