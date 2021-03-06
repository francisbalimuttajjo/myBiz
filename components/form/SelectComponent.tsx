import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { SelectProps as Props } from "../../types/types";

const SelectComponent = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const { categories } = useSelector((state: RootState) => state.stock);
  const [category, setCategory] = React.useState(props.categoryValue);

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: props.error ? "tomato" : "black",
        }}
      >
        <Picker
          onValueChange={(itemValue) => {
            setFieldValue("category", itemValue);
            setCategory(itemValue);
          }}
          mode={"dropdown"}
          selectedValue={category}
        >
          <Picker.Item label="select category *" value="" />
          {categories.map((el, index) => (
            <Picker.Item label={el.title} value={el.value} key={index} />
          ))}
        </Picker>
      </View>
      {props.error && <Text style={styles.error_msg}>{props.error}</Text>}
    </View>
  );
};
export default SelectComponent;

const styles = StyleSheet.create({
  mainContainer: { paddingHorizontal: 10, marginBottom: 10 },
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
  },

  error_msg: {
    color: "tomato",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});
