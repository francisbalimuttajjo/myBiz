import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        {/* <View> */}
          <View style={styles.text_container}>
            <Text style={{ ...styles.text, marginLeft: -10 }}>My</Text>
            <Text style={{ ...styles.text, marginRight: -5 }}>Biz</Text>
          </View>
        {/* </View> */}
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  text: { fontSize: 36, fontStyle: "italic" },
  container: {
    height: "20%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  sub_container: {
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text_container: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "#F2F2F2",
    // backgroundColor: "#bec4c0",
    width: "110%",
    justifyContent: "space-around",
  },
});
