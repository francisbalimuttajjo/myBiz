import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik, Field } from "formik";
import Input from "../CashBook/FloatingInput";
import Button from "./Button";
import useFns from "./useSignInFns";
import { TextInput } from "react-native-paper";
import Info from "../components/Info";

export const Form = () => {
  const {
    loading,
    secureText,
    errorMsg,
    validationSchema,
    initialValues,
    toggleSecureText,
    handleSubmit,
  } = useFns();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors }) => (
        <View>
          <View style={styles.container}>
            {errorMsg !== "" && <Info error={errorMsg} />}
            <Field
              component={Input}
              name="Email"
              label="Email"
              error={errors.Email}
              
            />
            <Field
              component={Input}
              name="Password"
              label="Password"
              error={errors.Password}
              secureTextEntry={secureText}
              right={
                <TextInput.Icon
                  name={!secureText ? "eye-off" : "eye"}
                  onPress={toggleSecureText}
                />
              }
            />
         
          </View>

          <Button loading={loading} disabled={loading} submit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 30,
    height: "60%",
    alignSelf:'center'
  },
 
});
