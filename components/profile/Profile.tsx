import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Image from "./Image";
import Email from "./Email";
import LogoutBtn from "./LogOut";

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
      <LogoutBtn />
    </View>
  );
};

export default Stock;
