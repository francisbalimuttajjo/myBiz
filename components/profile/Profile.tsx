import React from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Image from "./Image";
import Email from "./Email";
import LogoutBtn from "./LogOut";
import Form from "./Form";

const Stock = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <View>
      <ScrollView style={{ paddingBottom: "25%", height: "100%" }}>
        <Image
          image={user.image}
          //image=""
          name={`${user.firstName}  ${user.lastName}`}
        />

        <Email email={user.email} />
        <Form />
      </ScrollView>
      <LogoutBtn />
    </View>
  );
};

export default Stock;
