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
    handleSubmit,
    handleCash,
    handleDiscount,
    handleConfirm,
    showDatePicker,
    changeToCredit,
    changeToCash,
  } = useFns();
  // const { cart } = useSelector((state: RootState) => state.stock);
  // const [btn, setBtn] = React.useState<string>("cash");
  // const [message, setMessage] = React.useState<string>("");
  // const [client, setClient] = React.useState<string>("");
  // const [paymentDate, setPaymentDate] = React.useState<Date>(new Date());
  // const [discount, setDiscount] = React.useState<number>(0);
  // const [cashReceived, setCashReceived] = React.useState<number>(0);
  // const [error, setError] = React.useState<boolean>(false);
  // const [visible, setVisible] = React.useState<boolean>(true);
  // const changeToCash = () => setBtn("cash");
  // const changeToCredit = () => setBtn("credit");

  // const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date: Date) => {
  //   setPaymentDate(date);
  //   hideDatePicker();
  // };
  // const handleDiscount = (val: string) => setDiscount(+val);
  // const handleClient = (val: string) => {
  //   setMessage("");
  //   setError(false);
  //   setClient(val);
  // };
  // const handleCash = (val: string) => {
  //   setMessage("");
  //   setCashReceived(+val);
  // };

  // let sum = getTotalSum(cart);

  // let toBePaid = sum - discount;
  // const change = cashReceived - toBePaid < 0 ? 0 : cashReceived - toBePaid;
  // const handleSubmit = () => {
  //   setMessage("");
  //   if (!client) {
  //     setMessage("Customer is missing");
  //     return setError(true);
  //   }

  //   if (toBePaid > cashReceived && btn === "cash") {
  //     setMessage("Cash received is less");
  //     return;
  //   }

  //   //store the data in database
  //   //credit sale, and client pays somethin,record that client as a debtor with the balance
  //   console.log("submitted");
  // };

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
            <CartItem item={item.item} qty={item.qty} key={item.item._id} />
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
          loading={false}
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
