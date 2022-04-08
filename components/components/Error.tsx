import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type props = {
  info: string;
};
const Error = (props: props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            textTransform: "capitalize",
          }}
        >
          {props.info}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Error;
