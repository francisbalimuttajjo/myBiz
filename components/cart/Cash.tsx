import { useFormikContext } from "formik";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  ToBePaid: number;
  error: string;
};
const Cash = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const [cashReceived, setCashReceived] = React.useState<string>("0");

  const handleCashReceived = (val: string) => {
    setCashReceived(val);
    setFieldValue("CashReceived", val);
  };

  const change =
    props.ToBePaid <= 0 ? 0 : parseInt(cashReceived) - props.ToBePaid;

  return (
    <View
      style={{
        ...styles.main_container,
        borderColor: !props.error ? "#e0e1e2" : "red",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Cash Received :</Text>
        <TextInput
          value={cashReceived}
          keyboardType="numeric"
          style={{
            ...styles.input,
            borderColor: props.error ? "red" : "skyblue",
          }}
          placeholder="0.00"
          onChangeText={handleCashReceived}
        />
      </View>
      <View style={styles.divider}></View>
      <View style={styles.container}>
        <Text style={styles.text}>Change :</Text>
        <Text style={styles.change}>
          {isNaN(change) ? 0 : change < 0 ? 0 : change}
        </Text>
      </View>
    </View>
  );
};
export default Cash;
const styles = StyleSheet.create({
  main_container: {
    borderWidth: 0.5,
    marginBottom: "20%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
  },
  container: { width: "50%", padding: 20 },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    borderRightWidth: 1.5,
    borderColor: "black",
    height: "70%",
    marginTop: "5%",
  },
  input: {
    borderBottomWidth: 0.5,

    marginTop: "10%",
  },
  change: { borderBottomWidth: 0.5, borderColor: "skyblue", marginTop: "20%" },
});
