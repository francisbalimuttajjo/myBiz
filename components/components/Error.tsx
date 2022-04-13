import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Error = (props: { info: string }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.info}>{props.info}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },

  info: {
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "capitalize",
  },
});
