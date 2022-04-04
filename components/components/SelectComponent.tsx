import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import { StringIterator } from "lodash";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const categories = [
  { label: "Choose Category", value: "" },
  { label: "food", value: "food" },
  { label: "books", value: "books" },
  { label: "books", value: "books" },
];
type Props = {
  error?: string;
};

const SelectComponent = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const [category, setCategory] = React.useState<string>();

  return (
    <View style={{ paddingHorizontal: 10,marginBottom:10 }}>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderColor: props.error ? "tomato" : "black",
        }}
      >
        <Picker
          onValueChange={(itemValue) => {
            setFieldValue("categories", itemValue);
            setCategory(itemValue);
          }}
          mode={"dropdown"}
          selectedValue={category}
        >
          {categories.map((el, index) => (
            <Picker.Item label={el.label} value={el.value} key={index} />
          ))}
        </Picker>
      </View>
      {props.error && <Text style={styles.error_msg}>{props.error}</Text>}
    </View>
  );
};
export default SelectComponent;

const styles = StyleSheet.create({
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
