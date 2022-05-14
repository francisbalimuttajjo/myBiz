import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Ionicon from "react-native-vector-icons/Entypo";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Image from "./Image";
import Email from "./Email";

const Stock = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <View>
      <ScrollView style={{ paddingBottom: "25%" }}>
        <Image name={`${user.firstName}  ${user.lastName}`} />
        <Email email={user.email} />
        <Email email={user.email} />
        <Email email={user.email} />
        <Email email={user.email} />
        <Email email={user.email} />
      </ScrollView>
      <View
        style={{
          bottom: 0,
          position: "absolute",
          width: "100%",
          paddingVertical: "5%",
          alignItems: "flex-end",
          paddingHorizontal: "5%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "skyblue",
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicon name="log-out" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stock;
