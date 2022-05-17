import React from "react";
import { ScrollView, View } from "react-native";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import Input from "../CashBook/FloatingInput";
import Button from "./Button";
import { TextInput } from "react-native-paper";
type Props = {
  Email: string;
  Password: string;
  FirstName: string;
  LastName: string;
  PasswordConfirm: string;
};
export const Form = () => {
  const handleSubmit = (values: Props) => {
    console.log("values", values);
  };
  const [secureText, setSecureText] = React.useState<boolean>(true);
  const [secureTextConfirm, setSecureTextConfirm] =
    React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    Email: Yup.string()
      .trim()
      .email("invalid Email")
      .required("Email is required")
      .label("Email"),

    Password: Yup.string()
      .trim()
      .required("Password is required")
      .label("Password"),
    PasswordConfirm: Yup.string()
      .trim()
      .oneOf([Yup.ref("Password"), ""], "Passwords don't match")
      .required("Password is required")
      .label("PasswordConfirm"),

    FirstName: Yup.string()
      .trim()
      .required("FirstName is required")
      .label("FirstName"),
    LastName: Yup.string()
      .trim()
      .required("LastName is required")
      .label("LirstName"),
  });
  const initialValues = {
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    PasswordConfirm: "",
  };
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
              width: "100%",
              height: "60%",
            }}
          >
            <Field
              component={Input}
              name="FirstName"
              label="FirstName"
              error={errors.FirstName}
            />
            <Field
              component={Input}
              name="LastName"
              label="LastName"
              error={errors.LastName}
            />
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
                  name="eye"
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
                  name="eye"
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
