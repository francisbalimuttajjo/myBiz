import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CartItem from "./CartItems";
import Btn from "./PaymentBtns";
import DatePicker from "../components/DatePicker";
import CartSummary from "./CartSummary";
import useFns from "./useCartFns";
import Cash from "./Cash";
import Button from "../components/Button";
import Toast from "../components/Toast";

const Cart = () => {
  const {
    isDatePickerVisible,
    cart,
    toBePaid,
    sum,
    discount,
    btn,
    hideDatePicker,
    message,
    visible,
    error,
    handleClient,
    change,
    loading,
    date,
    handleSubmit,
    handleCash,
    handleDiscount,
    handleConfirm,
    showDatePicker,
    changeToCredit,
    changeToCash,
    clearMsg,
  } = useFns();
  React.useEffect(() => {
    if (message) {
      setTimeout(() => {
        clearMsg();
      }, 1000);
    }
  }, [message]);

  return (
    <View>
      <ScrollView>
        {message != "" && <Toast message={message} visible={visible} />}
        <View style={styles.container}>
          <Text style={{ ...styles.label, marginBottom: 10 }}>
            Add Customer
          </Text>
          <TextInput
            style={{ ...styles.input, borderColor: error ? "red" : "#e0e1e2" }}
            placeholder="Add Customer"
            keyboardType="default"
            onChangeText={handleClient}
          />
        </View>

        <Btn
          btn={btn}
          changeToCash={changeToCash}
          changeToCredit={changeToCredit}
        />
        {btn === "credit" && (
          <DatePicker
            hideDatePicker={hideDatePicker}
            handleConfirm={handleConfirm}
            isDatePickerVisible={isDatePickerVisible}
            showDatePicker={showDatePicker}
            date={date}
          />
        )}

        <View style={{ ...styles.container, marginTop: 20 }}>
          <Text style={styles.discount}>Apply Discount (Optional)</Text>
          <TextInput
            keyboardType="numeric"
            style={{ ...styles.input, borderColor: "#e0e1e2" }}
            placeholder="Enter Discount"
            onChangeText={handleDiscount}
          />
        </View>
        <View style={styles.container}>
          <Text style={{ ...styles.label, marginTop: 20 }}>Item List</Text>

          {cart.map((item) => (
            <CartItem item={item.item} qty={item.qty} key={item.item.id} />
          ))}
        </View>
        <CartSummary
          discount={discount}
          itemsPrice={sum}
          grandTotal={toBePaid}
        />
        <Cash change={change} handleCash={handleCash} />
      </ScrollView>

      <View style={styles.btn_container}>
        <Button
          loading={loading}
          title={`checkout ${toBePaid} `}
          submit={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  discount: { fontSize: 14, marginBottom: 5 },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  btn_container: { bottom: 0, position: "absolute", width: "100%" },
  label: { fontWeight: "normal", fontSize: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
});
