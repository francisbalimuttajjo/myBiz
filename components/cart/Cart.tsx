import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import CartItem from "./CartItems";
import Btn from "./PaymentBtns";

const Cart = () => {
  const { cart } = useSelector((state: RootState) => state.stock);
  const [btn, setBtn] = React.useState<string>("cash");
  const changeToCash = () => setBtn("cash");
  const changeToCredit = () => setBtn("credit");
  let error = false;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <Text style={{ fontWeight: "normal", fontSize: 20, marginBottom: 10 }}>
          Add Customer
        </Text>
        <TextInput
          style={{ ...styles.input, borderColor: error ? "red" : "#e0e1e2" }}
          placeholder="Add Customer"
        />
      </View>
      <Btn
        btn={btn}
        changeToCash={changeToCash}
        changeToCredit={changeToCredit}
      />
      <View style={{ width: "90%", alignSelf: "center" }}>
        <Text style={{ fontWeight: "normal", fontSize: 20, marginBottom: 10 }}>
          Item List
        </Text>
        <FlatList
          contentContainerStyle={{ paddingBottom: "80%", marginTop: "5%" }}
          data={cart}
          renderItem={(item) => (
            <CartItem item={item.item.item} qty={item.item.qty} />
          )}
          keyExtractor={(item) => item.item._id}
        />
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#e0e1e2",
    flexDirection: "row",
    padding: 2,
    height: 50,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
});
