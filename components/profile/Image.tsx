import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Ionicon from "react-native-vector-icons/Feather";
const ImageComponent = (props: { name: string }) => {
  const image =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  //"https://firebasestorage.googleapis.com/v0/b/mybizz-9ecc8.appspot.com/o/bafra%40gmail.com-1652526368236.jpg?alt=media&token=a351d50d-9917-451d-9d11-205bb5d3d444"

  return (
    <View style={styles.main_container}>
      <View style={styles.sub_container}>
        <View style={styles.image_container}>
          <Ionicon name="user" size={80} color="#5e5a5a" />
          {/* <Image
            // style={styles.image}
            source={{
              uri: image,
            }}
          /> */}
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Ionicon name="edit-2" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.name_container}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  main_container: {
    borderColor: "#e0e1e2",
    borderBottomWidth: 1,
    paddingVertical: 20,
    height: "30%",
  },
  sub_container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image_container: {
    backgroundColor: "#e0d8d7",
    height: 140,
    width: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -40,
    marginTop: 40,
  },
  name_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
    opacity: 0.6,
  },
});
