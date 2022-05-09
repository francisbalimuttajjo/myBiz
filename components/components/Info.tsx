import React from "react";
import { StyleSheet, Text,View } from "react-native";

const Info = (props:{error:string}) => {
  return (
    <View style={styles.error_container}>
      <Text style={styles.error_text}>{props.error}</Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  error_container: { width: "80%", alignSelf: "center", marginTop: 5 },
  error_text: { color: "red", textTransform: "capitalize" },
});
