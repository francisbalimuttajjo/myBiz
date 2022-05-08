import React from "react";
import { View } from "react-native";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import Input from "./Input";
import Button from "./Button";
import { TextInput } from "react-native-paper";

export const Form = () => {
  const handleSubmit = (values: { Email: string; Password: string }) => {
    console.log("values", values);
  };
  const [secureText, setSecureText] = React.useState<boolean>(false);
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
  });
  const initialValues = { Email: "", Password: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors, values }) => (
        <View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              height: "60%",
            }}
          >
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
                  name="eye"
                  onPress={() => setSecureText(!secureText)}
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
