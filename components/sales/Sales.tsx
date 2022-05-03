import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { addToCart, getItems } from "../../redux/StockSlice";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import BadgeComponent from "./Badge";
import StockComponent from "../stock/StockItem";
import LoadingComponent from "../components/LoadingComponent";
import EmptyNotification from "../components/Empty";

const Sales = () => {
  const dispatch = useDispatch();
  const { availableStock, loading ,store} = useSelector(
    (state: RootState) => state.stock
  );
  const handlePress = (val: string) => {
    dispatch(addToCart({ id: val }));
  };

  React.useEffect(() => {
    dispatch(getItems());
  }, [getItems]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Logo />
        <Banner />
        <BadgeComponent />
        {loading ? (
          <LoadingComponent />
        ) : store.length > 0 ? (
          <FlatList
            contentContainerStyle={{ paddingBottom: "80%", marginTop: "5%" }}
            data={availableStock}
            renderItem={(item) => (
              <StockComponent
                item={item.item}
                handlePress={handlePress}
                cartItem
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View>
            <EmptyNotification title=" Currently  There are no items in the catalogue" />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Sales;
