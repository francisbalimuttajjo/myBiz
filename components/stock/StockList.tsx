import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootState } from "../../redux/Store";
import EmptyNotification from "../components/Empty";
import LoadingComponent from "../components/LoadingComponent";
import StockComponent from "./StockItem";
import { changeToEditing, getItems } from "../../redux/StockSlice";
import useFns from "./useDeleteFns";

const ItemsList = () => {
  const { navigate } = useFns();
  const dispatch = useDispatch();
  const { availableStock, loading, infoMsg } = useSelector(
    (state: RootState) => state.stock
  );

  const handleEditing = (val: string) => {
    dispatch(changeToEditing({ id: val }));
    navigate("editStock", { id: val });
  };

  React.useEffect(() => {
    dispatch(getItems());
  }, [getItems]);

  return (
    <View>
      {availableStock.length < 1 && !loading && !infoMsg && (
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
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default ItemsList;
