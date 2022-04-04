import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Field, FieldProps, useFormikContext } from "formik";
import SelectComponent from "./SelectComponent";
import AppFormField from "./InputComponent";
import { toString } from "lodash";

const currencies = [
  {
    label: "ugx",
    value: "ugx",
  },
  {
    label: "ksh",
    value: "ksh",
  },
  {
    label: "usd",
    value: "usd",
  },
];

type Props = {
  // name: string;
  title: string;
  error?: string;
};
const PriceComponent: React.FC<Props> = (props) => {
  const [price, setPrice] = React.useState(0);

  const { setFieldValue } = useFormikContext();
  const [currency, setCurrency] = React.useState<string>();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "35%",
          borderBottomWidth: 0.5,
          height: 60,
          paddingBottom: -20,
        }}
      >
        <Text style={{ marginBottom: -15 }}>Currency</Text>
        <Picker
          onValueChange={(itemValue) => {
            setFieldValue(`${props.title}Currency`, itemValue);
            setCurrency(itemValue);
          }}
          mode={"dropdown"}
          selectedValue={currency}
        >
          {currencies.map((el, index) => (
            <Picker.Item label={el.label} value={el.value} key={index} />
          ))}
        </Picker>
      </View>
      <View style={styles.title_container}>
        <Text>Enter {props.title} Price</Text>
        <View
          style={{
            ...styles.input_container,
            borderColor: props.error ? "red" : "black",
          }}
        >
          <TextInput
            keyboardType="numeric"
            onChangeText={(text) => {
              setFieldValue(`${props.title}Price`, text);
              setPrice(+text);
            }}
            value={String(price)}
            style={{ marginBottom: 0 }}
          />
        </View>
        {props.error && (
          <Text style={styles.error_msg}>
           
            {props.error}
          </Text>
        )}
      </View>
    </View>
  );
};
export default PriceComponent;
const styles = StyleSheet.create({
  container: { flexDirection: "row", marginLeft: 10, paddingLeft: 10 },
  title_container: {
    width: "50%",
    marginLeft: 20,
  },
  input_container: {
    marginTop: 13,
    borderBottomWidth: 0.5,
  },
  error_msg: {
    color: "tomato",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});
