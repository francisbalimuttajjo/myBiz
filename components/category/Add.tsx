import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Formik, Field } from "formik";
import Button from "../components/Button";
import Search from "../components/Search";
import AppFormField from "../form/InputComponent";
import CategoryItem from "./Category";
import useFns from "./useFns";

const initialValues = {
  category: "",
};

const Add = () => {
  const {
    validationSchema,
    categories,
    displayCategoriesSearchBar,
    clearSearchField,
    handleClicked,
    handleChange,
    clicked,
    searchPhrase,
    infoMsg,
  } = useFns();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
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
            </View>
            {displayCategoriesSearchBar && (
              <Search
                infoMsg={infoMsg}
                searchPhrase={searchPhrase}
                clearSearchField={clearSearchField}
                clicked={clicked}
                handleChange={handleChange}
                handleClicked={handleClicked}
                placeholder="Search Categories"
              />
            )}
            <FlatList
              style={styles.flatList}
              data={categories}
              renderItem={(item) => <CategoryItem item={item.item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.btn}>
            <Button title="save " submit={handleSubmit} loading={false} />
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
  flatList: {
    alignSelf: "center",
    width: "90%",
  },
  btn: {
    width: "100%",
  },
  sub_container: { height: "90%" },
});
