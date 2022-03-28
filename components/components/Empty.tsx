import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const EmptyList: React.FC<{ title: string }> = (props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-sharp" size={60} color="skyblue" />
      <Text style={{ color: "skyblue" }}>{props.title}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
});
