import { FieldProps } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import { InputProps as Props } from "../../types/types";
type Props = {
  placeholder?: string
  numeric?: boolean
error ?:string 
  
}

const AppFormField: React.FC<Props & FieldProps> = (props) => {
  const {
    placeholder,
    numeric,
    error,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];
  

  return (
    <View>
      <View
        style={{
          ...styles.sub_contsiner,
          borderColor: hasError ? "red" : "black",
        }}      >
              <TextInput
            style={{
              ...styles.input,
              // borderColor: error ? "red" : "#e0e1e2",
            }}
            placeholder="Add Customer"
          // keyboardType="default"
          keyboardType={numeric ? "numeric" : "default"}
           onChangeText={(text) => {           
            onChange(name)(text);
          }}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          {...inputProps}
          
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
  // input: {
  //   width: "100%",
  //   alignSelf: "center",
  //   marginTop: 10,
  //   marginLeft: 32,
  // },
  error_msg: {
    color: "tomato",
    alignSelf: "center",
    textTransform: "capitalize",
  },
    input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
});
