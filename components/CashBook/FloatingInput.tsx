import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { FloatingLabelProps as Props } from "../../types/types";

const Input: React.FC<Props> = (props) => {
  return (
    <TextInput
      label={props.label}
      mode="outlined"
      value={props.value}
      onChangeText={props.onChangeText}
      outlineColor="#bdbdbd"
      activeOutlineColor="green"
      keyboardType={props.keyboard ? "numeric" : "default"}
      theme={{
        colors: { text: props.item.type === "cash-out" ? "red" : "green" },
      }}
      error={props.error}
      style={styles.input}
      autoComplete
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    height: 50,
    marginTop:'5%'
  },
});

