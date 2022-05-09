import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

type Props = {
  loading: boolean;
  disabled: boolean;
  submit: () => void;
};
const Button = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.submit}
        activeOpacity={0.7}
        disabled={props.disabled}
        style={{
          backgroundColor: props.loading ? "#b7eaeb" : "skyblue",
          ...styles.btn,
        }}
      >
        {props.loading && <ActivityIndicator size="small" color="white" />}
        <Text style={styles.btn_text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  container: { width: "100%", paddingVertical: 10 },
  btn: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btn_text: {
    paddingVertical: 15,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
