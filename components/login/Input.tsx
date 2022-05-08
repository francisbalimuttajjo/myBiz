import { FieldProps } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
type Props = {
  label: string;
  error: string |boolean;
};

const Input: React.FC<Props & FieldProps> = (props) => {
  const {
    error,
    label,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={styles.container}>
      <TextInput
        label={props.label}
        onChangeText={(text) => {
          onChange(name)(text);
        }}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        mode="flat"
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        {...inputProps}
        outlineColor="#bdbdbd"
        activeOutlineColor="#fefefe"
        error={hasError}
        style={styles.input}
       
      />

      {hasError && <Text style={styles.error_msg}>{errors[name]}</Text>}
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 6,
  },

  input: {
    width: "90%",
    // alignSelf: "center",
    //   marginTop: 10,
    // //  backgroundColor: "#bec4c0",
    // marginLeft: 32,
  },
  error_msg: {
    color: "red",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});
