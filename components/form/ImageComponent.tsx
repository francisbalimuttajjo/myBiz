import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log("camera clicked")}>
        <Ionicon name="camera" size={100} color="#6b6767" />
      </Pressable>

      <Text style={styles.text}>Add Image</Text>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: {
    marginTop: -16,
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 20,
  },
});
