import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import EmptyNotification from "../components/Empty";
import LoadingComponent from "../components/LoadingComponent";
import StockComponent from "./StockItem";
import { useDispatch } from "react-redux";
import { changeToEditing } from "../../redux/StockSlice";
import useFns from "./useDeleteFns";

const StockList = () => {
  const { availableStock, loading } = useSelector(
    (state: RootState) => state.stock
  );
  const { navigate } = useFns();
  const dispatch = useDispatch();
  const handleEditing = (val: string) => {
    dispatch(changeToEditing({ id: val }));
    navigate("editStock", { id: val });
  };
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
          renderItem={(item) => (
            <StockComponent handlePress={handleEditing} item={item.item} />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
};

export default StockList;
