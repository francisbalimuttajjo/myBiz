import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik, Field } from "formik";
import Input from "../CashBook/FloatingInput";
import Info from "../components/Info";
import useFns from "./useFns";

const Form = () => {
  const { loading, error, initialValues, validationSchema, handleSubmit } =
    useFns();

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
          {error !== "" && <Info error={error} />}
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
