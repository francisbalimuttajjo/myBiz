import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { mainStackParams } from "../../types/types";
type Props = NativeStackScreenProps<mainStackParams, "cash">;

const Edit = () => {
  // const { item } = route.params;
//   console.log(route);
  return (
    <View>
      <Text>Editing</Text>
    </View>
  );
};

export default Edit;
