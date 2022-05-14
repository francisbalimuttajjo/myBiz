import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import Input from "../CashBook/FloatingInput";

const Form = () => {
  const [loading, setLoading] = React.useState(false);
  const initialValues = { currentPassword: "", newPassword: "" };
  const handleSubmit = (vals: any) => {
    console.log(vals);
  };
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string()
      .trim()
      .required("Field is required")
      .label("currentPassword"),
    newPassword: Yup.string()
      .trim()
      .required("Field is required")
      .label("newPassword"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.main_container}>
          <Text style={styles.main_text}>Change Password</Text>
          <Field
            component={Input}
            name="currentPassword"
            label="Current Password"
          />
          <Field component={Input} name="newPassword" label="New Password" />
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={loading}
            style={styles.btn_container}
            onPress={handleSubmit}
          >
            {!loading && <Text style={styles.btn_text}>Save</Text>}
            {loading && <ActivityIndicator size="small" color="white" />}
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({
  main_container: { width: "90%", alignSelf: "center", marginTop: 10 },
  main_text: { fontWeight: "bold", fontSize: 20 },
  btn_text: { color: "white", fontWeight: "bold" },
  btn_container: {
    backgroundColor: "skyblue",
    width: "40%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
});
