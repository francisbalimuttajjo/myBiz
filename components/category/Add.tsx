import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Formik, Field } from "formik";
import Button from "../components/Button";
import Search from "../components/Search";
import AppFormField from "../form/InputComponent";
import CategoryItem from "./Category";
import useFns from "./useFns";
import Info from "../components/Info";

const initialValues = {
  category: "",
};

const Add = () => {
  const {
    validationSchema,
    categories,
    searchQuery,
    onChangeSearch,
    infoMsg,
    loading,
    error,
    handleSubmit,
  } = useFns();

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
                placeholder="Enter New Category"
                title="New Category"
                required
              />
              {error !== "" && <Info error={error} />}
            </View>
            {/* {displayCategoriesSearchBar && (
              <Search
                infoMsg={infoMsg}
                searchQuery={searchQuery}
                onChangeSearch={onChangeSearch}
                placeholder="Search Categories"
              />
            )} */}
            <ScrollView style={styles.list}>
              {categories.slice(1).map((item) => (
                <CategoryItem item={item} key={item.id} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.btn}>
            <Button title="save" submit={handleSubmit} loading={loading} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Add;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 60,
  },
  input_container: { margin: 20 },
  list: {
    alignSelf: "center",
    width: "90%",
  },
  btn: {
    width: "100%",
  },
  sub_container: { height: "90%" },
});
