import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo/logo.png")}
        borderRadius={70}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  text: { fontSize: 36, fontStyle: "italic" },
  container: {
    height: "30%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: { width: 140, height: 140 },
});
