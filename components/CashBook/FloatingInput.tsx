import { FieldProps } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { FloatingLabelProps as Props } from "../../types/types";
import { TextInput } from "react-native-paper";

const FloatingLabel: React.FC<Props & FieldProps> = (props) => {
  const {
    keyboard,
    isAmount,
    color,
    type,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <TextInput
      label={props.label}
      onChangeText={(text) => {
        onChange(name)(text);
      }}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
      mode="outlined"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      {...inputProps}
      outlineColor="#bdbdbd"
      activeOutlineColor={props.color ? props.color : "green"}
      keyboardType={props.keyboard ? "numeric" : "default"}
      theme={{
        colors: {
          text: isAmount ? (type === "cash-out" ? "red" : "green") : "black",
        },
      }}
      error={hasError}
      style={styles.input}
      autoComplete
    />
  );
};
export default FloatingLabel;
// import { StyleSheet } from "react-native";
// import { TextInput } from "react-native-paper";
// import { FloatingLabelProps as Props } from "../../types/types";

// const Input: React.FC<Props> = (props) => {
//   return (
//     <TextInput
//       label={props.label}
//       mode="outlined"
//       value={props.value}
//       onChangeText={props.onChangeText}
//       outlineColor="#bdbdbd"
//       activeOutlineColor="green"
//       keyboardType={props.keyboard ? "numeric" : "default"}
//       theme={{
//         colors: {
//           text: props.isAmount
//             ? props.item.type === "cash-out"
//               ? "red"
//               : "green"
//             : "black",
//         },
//       }}
//       error={props.error}
//       style={styles.input}
//       autoComplete
//     />
//   );
// };
// export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    height: 50,
    marginTop: "5%",
  },
});
