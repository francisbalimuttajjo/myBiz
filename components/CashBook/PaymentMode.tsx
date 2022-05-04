import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const PaymentMode = (props: { paymentMode: string }) => {
  const { setFieldValue } = useFormikContext();
  const [paymentMode, setPaymentMode] = React.useState<string>(
    props.paymentMode
  );

  const changeToCash = () => {
    setFieldValue("paymentMode", "cash");
    setPaymentMode("cash");
  };

  const changeToOnline = () => {
    setFieldValue("paymentMode", "online");
    setPaymentMode("online");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.main_text}>Payment Mode</Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={changeToCash}
          style={{
            ...styles.btn_container,
            backgroundColor: paymentMode === "cash" ? "green" : "#e1e5eb",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: paymentMode === "cash" ? "#fff" : "black",
            }}
          >
            Cash
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changeToOnline}
          activeOpacity={0.7}
          style={{
            ...styles.btn_container,
            marginLeft: 15,
            backgroundColor: paymentMode === "online" ? "green" : "#e1e5eb",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: paymentMode === "online" ? "#fff" : "black",
            }}
          >
            Online
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentMode;

const styles = StyleSheet.create({
  main_text: { opacity: 0.7, marginVertical: "5%" },
  container: {
    width: "90%",
    alignSelf: "center",
    padding: "5%",
  },
  btn_container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 18,
    width: "30%",
  },
});
