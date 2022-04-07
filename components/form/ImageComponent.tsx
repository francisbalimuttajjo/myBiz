import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = {
  navigate: (route: string) => void;
};
const ImageComponent = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("camera")}>
          <Ionicon name="camera" size={100} color="#6b6767" />
        </Pressable>

        <Text style={styles.text}>Add Image</Text>
      </View>
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
