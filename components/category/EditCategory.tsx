import { Field, Formik } from "formik";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from "../components/Button";
import Info from "../components/Info";
import useFns from "./useFns";
import useEditFns from "./useEditFns";
import AppFormField from "../form/InputComponent";

type Props = {
  item: { title?: string; id?: number };
};

const Category = (props: Props) => {
  const { validationSchema } = useFns();
  const { loading, handleSubmit, handleDelete, initialValues, error } =
    useEditFns(props.item.id, props.item.title);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => (
        <View>
          <View style={styles.sub_container}>
            <View style={styles.input_container}>
              <Field
                component={AppFormField}
                name="category"
                placeholder="Edit Category Name"
                title="Edit Name"
              />
            </View>
            {error !== "" && <Info error={error} />}
            <TouchableOpacity
              onPress={handleDelete}
              activeOpacity={0.7}
              style={styles.delete_btn}
              disabled={loading}
            >
              <Icon name="trash" size={15} color="black" />
              <Text style={styles.delete_text}>Delete Category</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <Button title="Update " submit={handleSubmit} loading={loading} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Category;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 60,
  },
  input_container: { margin: 20 },
  delete_text: { marginLeft: 10, fontWeight: "bold" },
  delete_btn: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#e0e1e2",
    justifyContent: "center",
    paddingVertical: 12,
    width: "90%",
    borderRadius: 10,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 6,
  },
  btn: {
    width: "100%",
  },
  sub_container: { height: "90%" },
});
