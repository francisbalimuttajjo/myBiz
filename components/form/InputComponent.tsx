import { FieldProps } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {InputProps as Props} from '../../types/types'

const AppFormField: React.FC<Props & FieldProps> = (props) => {
  const {
    placeholder,
    required,
    numeric,
    title,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.sub_contsiner,
          borderColor: hasError ? "tomato" : "black",
        }}
      >
        <Text style={styles.title}>
          {title}
          {required ? " *" : ""}
        </Text>
        <TextInput
          keyboardType={numeric ? "numeric" : "default"}
          placeholder={placeholder}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          {...inputProps}
          style={styles.input}
        />
      </View>
      {hasError && <Text style={styles.error_msg}>{errors[name]}</Text>}
    </View>
  );
};
export default AppFormField;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 6,
  },
  title: {
    textTransform: "capitalize",
    marginTop: 16,
  },
  sub_contsiner: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    width: "100%",
    paddingBottom: -20,
  },
  input: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 32,
  },
  error_msg: {
    color: "tomato",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});
