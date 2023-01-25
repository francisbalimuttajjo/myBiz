import React from "react";
import { Field, Formik } from "formik";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useFns from "./useCartFns";
import Btn from "./PaymentBtns";
import CartSummary from "./CartSummary";
import CartItem from "./CartItems";
import Cash from "./Cash";
import Input from "../CashBook/FloatingInput";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";
import Info from "../components/Info";

const Cart = () => {
  const {
    changeToCredit,
    changeToCash,
    btn,
    cart,
    loading,
    setError,
    error,
    initialValues,
    validationSchema,
    sum,
    date,
    handleConfirm,
    handleSubmit,
    hideDatePicker,
    showDatePicker,
    isDatePickerVisible,
  } = useFns();

  React.useEffect(() => {
    setError("");
  }, [setError]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors, values }) => (
        <View>
          <ScrollView style={{ marginBottom: "25%" }}>
            <View style={styles.container}>
              <Text style={{ ...styles.label }}>Add Customer</Text>
              <Field
                component={Input}
                name="Customer"
                label="Customer"
                color="skyblue"
                placeholder="Add Customer Name"
                error={errors.Customer}
              />
            </View>
            <Btn
              btn={btn}
              changeToCash={changeToCash}
              changeToCredit={changeToCredit}
            />
            <View style={{ ...styles.container, marginTop: 20 }}>
              <Text style={styles.discount}>Apply Discount (Optional) </Text>
              <Field
                component={Input}
                name="Discount"
                label="Discount"
                color="skyblue"
                placeholder="Enter Discount"
                keyboard
              />
            </View>
            {btn === "credit" && (
              <DatePicker
                hideDatePicker={hideDatePicker}
                handleConfirm={handleConfirm}
                isDatePickerVisible={isDatePickerVisible}
                showDatePicker={showDatePicker}
                date={date}
              />
            )}
            <View style={styles.container}>
              <Text style={{ ...styles.label, marginTop: 20 }}>Item List</Text>
              {cart.map((item) => (
                <CartItem item={item.item} qty={item.qty} key={item.item.id} />
              ))}
            </View>
            <CartSummary
              discount={parseInt(values.Discount)}
              itemsPrice={sum}
              grandTotal={sum - parseInt(values.Discount)}
            />
            <Cash ToBePaid={sum - parseInt(values.Discount)} error={error} />
            {error !== "" && (
              <View style={{ marginTop: -70 }}>
                <Info error={error} />
              </View>
            )}
          </ScrollView>
          <View style={styles.btn_container}>
            <Button
              loading={loading}
              title={`checkout ${
                sum - parseInt(values.Discount) < 0
                  ? ""
                  : sum - parseInt(values.Discount)
              } `}
              submit={handleSubmit}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Cart;
const styles = StyleSheet.create({
  discount: { fontSize: 14, marginBottom: -7 },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  btn_container: { bottom: 0, position: "absolute", width: "100%" },
  label: { fontWeight: "normal", fontSize: 20 },
});