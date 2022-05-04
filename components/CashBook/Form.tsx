import React from "react";
import * as Yup from "yup";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Input from "./FloatingInput";
import { Formik, Field } from "formik";
import CategoriesPicker from "./PickerComponent";
import EntryTypeBtns from "./EntryTypeBtns";
import { CashBookFormProps as Props } from "../../types/types";
import DateComponent from "./DateComponent";
import PaymentMode from "./PaymentMode";

export const Form = (props: Props) => {
  const handleSubmit = (values: Props["initialValues"]) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    Amount: Yup.number().required().min(1, "Amount").label("Amount"),
    Remark: Yup.string().trim().required("Remark is required").label("Remark"),
    type: Yup.string().trim().required("type is required").label("type"),
    Category: Yup.string()
      .trim()
      .required("Category is required")
      .label("Category"),
  });

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors }) => (
        <View style={styles.main_container}>
          <ScrollView style={{ paddingTop: props.editing ? "2%" : "10%" }}>
            {props.editing && <EntryTypeBtns type={props.initialValues.type} />}
            <DateComponent
              time={props.initialValues.itemTime}
              date={props.initialValues.itemDate}
            />
            <View style={styles.input_container}>
              <Field
                component={Input}
                name="Amount"
                label="Amount"
                keyboard
                type={props.initialValues.type}
                isAmount
              />
              <Field
                component={Input}
                name="Remark"
                label="Remark"
                type={props.initialValues.type}
              />
            </View>

            <CategoriesPicker
              error={errors.Category}
              categories={props.categories}
              initialValues={props.initialValues}
            />
            <PaymentMode paymentMode={props.initialValues.paymentMode} />
          </ScrollView>

          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.8}
            style={{
              ...styles.btn_container,
              backgroundColor:
                Object.values(errors).length !== 0 ? "#b3b0aa" : "green",
            }}
          >
            <Text style={styles.btn_text}>
              {!props.editing ? "SAVE" : "UPDATE"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default Form;

const styles = StyleSheet.create({
  main_container: { backgroundColor: "#fff", height: "100%" },

  btn_text: { fontWeight: "bold", color: "#fff", fontSize: 16 },

  input_container: {
    paddingVertical: "5%",
    width: "90%",
    alignSelf: "center",
    marginBottom: "5%",
  },
  btn_container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 7,
   
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "4%",
    marginVertical: "5%",
  },
});
