import { useFormikContext } from "formik";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Type = (props: { type: string }) => {
  const [type, setType] = React.useState(props.type);
  const { setFieldValue } = useFormikContext();

  const changeToCashIn = () => {
    setType("cash-in");
    setFieldValue("type", "cash-in");
  };

  const changeToCashOut = () => {
    setType("cash-out");
    setFieldValue("type", "cash-out");
  };
  return (
    <View style={styles.btns_container}>
      <TouchableOpacity
        onPress={changeToCashIn}
        activeOpacity={0.8}
        style={{
          backgroundColor: type === "cash-in" ? "green" : "#e1e5eb",
          marginHorizontal: 15,
          ...styles.btn,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: type === "cash-in" ? "#fff" : "black",
          }}
        >
          Cash-In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={changeToCashOut}
        style={{
          ...styles.btn,
          backgroundColor: type === "cash-out" ? "red" : "#e1e5eb",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: type === "cash-out" ? "#fff" : "black",
          }}
        >
          Cash-Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Type;
const styles = StyleSheet.create({
  btns_container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: "5%",
  },
  btn: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 18 },
});
