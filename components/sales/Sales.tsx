import React from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import { addToCart } from "../../redux/StockSlice";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import BadgeComponent from "./Badge";
import StockComponent from "../stock/StockItem";

const Sales = () => {
  const dispatch = useDispatch();
  const { availableStock, loading } = useSelector(
    (state: RootState) => state.stock
  );
    const handlePress = (val: string) => {
      console.log('clicked')
    dispatch(addToCart({ id: val }));
  };
  return (
    <View style={{ flex: 1 }}>
      <Logo />
      <Banner />
      <BadgeComponent />
      <FlatList
        contentContainerStyle={{ paddingBottom: "80%", marginTop: "5%" }}
        data={availableStock}
        renderItem={(item) => (
          <StockComponent item={item.item} handlePress={handlePress} cartItem />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};
export default Sales;
