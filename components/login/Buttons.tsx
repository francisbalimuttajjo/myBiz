import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  status: "signIn" | "signUp";
  changeToSignIn: () => void;
  changeToSignUp: () => void;
};

const Buttons = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <TouchableOpacity activeOpacity={0.5} onPress={props.changeToSignIn}>
          <Text
            style={{
              color: props.status === "signIn" ? "#87ceeb" : "black",
              ...styles.sign_in_text,
            }}
          >
            SIGN IN
          </Text>
          <View
            style={{
              borderColor: props.status === "signIn" ? "#87ceeb" : "",
              borderBottomWidth: props.status === "signIn" ? 0.5 : 0,
              ...styles.border_sign_in,
            }}
          ></View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ width: "50%" }}
        activeOpacity={0.5}
        onPress={props.changeToSignUp}
      >
        <Text
          style={{
            color: props.status === "signUp" ? "#87ceeb" : "black",

            alignSelf: "flex-end",
            fontSize: 20,
          }}
        >
          SIGN UP
        </Text>
        <View
          style={{
            borderColor: props.status === "signUp" ? "#87ceeb" : "",
            borderBottomWidth: props.status === "signUp" ? 0.5 : 0,
            ...styles.border_sign_up,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    width: "60%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  sign_in_text: { alignSelf: "flex-start", fontSize: 20 },
  border_sign_in: {
    width: "60%",
    paddingBottom: 5,
    alignSelf: "flex-start",
  },
  border_sign_up: {
    paddingBottom: 5,
    width: "65%",
    alignSelf: "flex-end",
  },
});
