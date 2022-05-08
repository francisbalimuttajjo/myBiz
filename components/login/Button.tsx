import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

type Props = {
  loading: boolean;
  disabled: boolean;
  submit: () => void;
};
const Button = (props: Props) => {
  return (
    <View style={{ width: "100%", paddingVertical: 10 }}>
      <TouchableOpacity
        onPress={props.submit}
        activeOpacity={0.7}
        disabled={props.disabled}
        style={{
          width: "90%",
          backgroundColor: props.loading ? "#b7eaeb" : "skyblue",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {props.loading && <ActivityIndicator size="small" color="white" />}
        <Text
          style={{
            paddingVertical: 15,
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
