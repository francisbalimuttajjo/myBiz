import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { addToCart, getItems } from "../../redux/StockSlice";
import Banner from "../components/Banner";
import EmptyNotification from "../components/Empty";
import Logo from "../components/Logo";
import BadgeComponent from "./Badge";
import StockComponent from "../stock/StockItem";

const Sales = () => {
  const dispatch = useDispatch();
  const { availableStock } = useSelector((state: RootState) => state.stock);
  const { user } = useSelector((state: RootState) => state.user);

  const handlePress = (val: number) => {
    dispatch(addToCart({ id: val }));
  };

  React.useEffect(() => {
    dispatch(getItems({ email: user.email }));
  }, [getItems]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Logo />
        <Banner />
        {availableStock.length > 0 ? (
          <>
            <BadgeComponent />
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
              keyExtractor={(item) => item.id.toString()}
            />
          </>
        ) : (
          <EmptyNotification title="No stock available currently" />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Sales;
