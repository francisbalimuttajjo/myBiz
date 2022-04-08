import React from "react";
import {
  Text,
  View,
  ScrollView,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Formik, Field } from "formik";
import Button from "../components/Button";
import Search from "../components/Search";
import AppFormField from "../form/InputComponent";
import CategoryItem from "./Category";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCategories } from "../../redux/StockSlice";

const validationSchema = Yup.object().shape({
  category: Yup.string().trim().required("field is required").label("category"),
});

const initialValues = {
  category: "",
};

const Add = () => {
    const dispatch= useDispatch();
  const [clicked, setClicked] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");
  console.log({ searchPhrase });

  const handleChange = (val: string) => {
    setSearchPhrase(val);
     dispatch(filterCategories(val));
  };
  const handleClicked = () => setClicked(true);

  const clearSearchField = () => {
    setSearchPhrase("");
    Keyboard.dismiss();
    setClicked(false);
     dispatch(filterCategories(""));
  };


   const { categories} = useSelector(
    (state: RootState) => state.stock
  );
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
            {/* {data.length > 0 && ( */}
              <Search
                searchPhrase={searchPhrase}
                clearSearchField={clearSearchField}
                clicked={clicked}
                handleChange={handleChange}
                handleClicked={handleClicked}
                placeholder="Search Categories"
              />
            {/* )} */}
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
