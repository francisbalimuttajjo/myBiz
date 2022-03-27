import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import Logo from "../../components/components/Logo";
import Banner from "../../components/components/Banner";

const Stock = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Logo />
          <Banner />
          <View style={styles.container}>
            <View>
              <Text style={styles.text}>Stock/Catolog</Text>
              <View style={styles.separator} />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={() => console.log("clicked")}
            >
              <Text style={styles.btn_container}> AddItem/Category</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Stock;

const styles = StyleSheet.create({
  btn_container: {
    color: "skyblue",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2,
  },

  text: {
    fontWeight: "bold",
    margin: 6,
    fontSize: 20,
  },
  btn: {
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "skyblue",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
