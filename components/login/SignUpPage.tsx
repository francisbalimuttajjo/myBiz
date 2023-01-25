import React from "react";
import { View } from "react-native";
import { Formik, Field } from "formik";
import Input from "../CashBook/FloatingInput";
import Button from "./Button";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Info, { InfoSuccess } from "../components/Info";
import useFns from "./useSignUpFns";

const Form = () => {
  const {
    initialValues,
    validationSchema,
    secureTextConfirm,
    setSecureTextConfirm,
    secureText,
    setSecureText,
    loading,
    error,
    handleSubmit,
    msg,
  } = useFns();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors }) => (
        <View>
          <ScrollView
            style={{
              width: "90%",
              height: "50%",
              alignSelf: "center",
            }}
          >
            {error !== "" && <Info error={error} />}
            {msg !== "" && <InfoSuccess msg={msg} />}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <View style={{ width: "48%" }}>
                <Field
                  component={Input}
                  name="FirstName"
                  label="FirstName"
                  error={errors.FirstName}
                />
              </View>
              <View style={{ width: "48%" }}>
                <Field
                  component={Input}
                  name="LastName"
                  label="LastName"
                  error={errors.LastName}
                />
              </View>
            </View>

            <Field
              component={Input}
              name="Email"
              label="Email"
              error={errors.Email}
              placeholder="yourEmail@example.com"
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
                  onPress={() => setSecureText(!secureText)}
                />
              }
            />
            <Field
              component={Input}
              name="PasswordConfirm"
              label="Confirm Password"
              error={errors.Password}
              secureTextEntry={secureTextConfirm}
              right={
                <TextInput.Icon
                  name={!secureTextConfirm ? "eye-off" : "eye"}
                  onPress={() => setSecureTextConfirm(!secureTextConfirm)}
                />
              }
            />
          </ScrollView>

          <Button loading={loading} disabled={loading} submit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default Form;
