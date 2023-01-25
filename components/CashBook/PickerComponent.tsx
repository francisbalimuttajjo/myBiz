import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { PickerComponentProps as Props } from "../../types/types";

function PickerComponent(props: Props) {
  const [category, setCategory] = React.useState<string>(
    props.initialValues.Category
    );
    
  const { setFieldValue } = useFormikContext();
  const handlePickerChange = (value: string) => {
    setFieldValue("Category", value);
    setCategory(value);
  };
  return (
    <View>
      <View style={styles.category_container}>
        <Text style={{ fontWeight: "bold" }}>Category:</Text>
      </View>

      <View
        style={{
          ...styles.picker_container,
          borderColor: props.error ? "red" : "#bdbdbd",
        }}
      >
        <Picker
          onValueChange={handlePickerChange}
          mode={"dropdown"}
          selectedValue={category}
        >
          {props.categories.map((el, index) => (
            <Picker.Item label={el.title} value={el.value} key={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

export default PickerComponent;

const styles = StyleSheet.create({
  picker_container: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 7,
  },
  category_container: { width: "90%", alignSelf: "center", marginBottom: 10 },
});
