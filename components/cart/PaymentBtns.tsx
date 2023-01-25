import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BtnProps as Props } from "../../types/types";

const Btns = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Payment Type</Text>
      <View style={styles.btn_container}>
        <Pressable
          onPress={props.changeToCash}
          style={{
            ...styles.btn,
            backgroundColor: props.btn === "cash" ? "skyblue" : "#e0e1e2",
          }}
        >
          <Text
            style={{
              color: props.btn === "cash" ? "white" : "black",
            }}
          >
            CASH
          </Text>
        </Pressable>

        <Pressable
          onPress={props.changeToCredit}
          style={{
            ...styles.btn,
            backgroundColor: props.btn === "credit" ? "skyblue" : "#e0e1e2",
          }}
        >
          <Text
            style={{
              color: props.btn === "credit" ? "white" : "black",
            }}
          >
            CREDIT
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Btns;
const styles = StyleSheet.create({
  container: { width: "90%", alignSelf: "center", marginTop: 30 },
  text: { fontWeight: "normal", fontSize: 20, marginBottom: 5 },
  btn_container: {
    borderWidth: 1,
    borderColor: "#e0e1e2",
    flexDirection: "row",
    padding: 2,
    height: 50,
  },
  btn: {
    width: "50%",
    alignItems: "center",

    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
});
