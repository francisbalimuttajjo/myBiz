import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const EmptyList: React.FC<{ title: string }> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <View style={styles.icon}>
          <Ionicons name="information-circle-sharp" size={60} color="skyblue" />
        </View>
        <Text style={{ color: "skyblue" }}>{props.title}</Text>
      </View>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  icon_container: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    flexDirection: "row",
    padding: "5%",
  },
  icon: { justifyContent: "center", alignSelf: "center" },
});
