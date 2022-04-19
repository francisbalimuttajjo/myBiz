import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  paymentMode: string;
  changeToCash: () => void;
  changeToOnline: () => void;
};

const Mode = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main_text}>Payment Mode</Text>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.changeToCash}
          style={{
            ...styles.btn_container,
            backgroundColor: props.paymentMode === "cash" ? "green" : "#e1e5eb",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: props.paymentMode === "cash" ? "#fff" : "black",
            }}
          >
            Cash
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.changeToOnline}
          activeOpacity={0.7}
          style={{
            ...styles.btn_container,
            marginLeft: 15,
            backgroundColor:
              props.paymentMode === "online" ? "green" : "#e1e5eb",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: props.paymentMode === "online" ? "#fff" : "black",
            }}
          >
            Online
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mode;

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
