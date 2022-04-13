import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import {ButtonProps as Props} from '../../types/types'


const Supplier: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={props.loading}
      style={{
        ...styles.button,
        backgroundColor: props.loading ? "#b7eaeb" : "skyblue",
      }}
      onPress={props.submit}
    >
      {!props.loading && <Text style={styles.text}>{props.title}</Text>}
      {props.loading && <ActivityIndicator size="small" color="skyblue" />}
    </TouchableOpacity>
  );
};

export default Supplier;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "capitalize",
  },
});
