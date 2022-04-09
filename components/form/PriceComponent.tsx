import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";

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
  required?: boolean;
  title: string;
  error?: string;
  currency: string;
  price: number;
  setPrice: (val: number) => void;
};
const PriceComponent: React.FC<Props> = (props) => {
  const { setFieldValue } = useFormikContext();
  const [currency, setCurrency] = React.useState<string>();

  return (
    <View style={styles.container}>
      <View style={styles.currency_container}>
        <Text style={{ marginBottom: -15 }}>Currency</Text>
        <Picker
          onValueChange={(itemValue) => {
            setFieldValue(`${props.title}Currency`, itemValue);
            setCurrency(itemValue);
          }}
          mode={"dropdown"}
          selectedValue={props.currency}
        >
          {currencies.map((el, index) => (
            <Picker.Item label={el.label} value={el.value} key={index} />
          ))}
        </Picker>
      </View>
      <View style={styles.title_container}>
        <Text>
          Enter {props.title} Price {props.required ? "*" : ""}
        </Text>
        <View
          style={{
            ...styles.input_container,
            borderColor: props.error ? "red" : "black",
          }}
        >
          <TextInput
            keyboardType="numeric"
            onChangeText={(text) => {
              console.log({ text });
              setFieldValue(`${props.title}Price`, text);
              props.setPrice(+text);
            }}
            value={String(props.price)}
          />
        </View>
        {props.error && <Text style={styles.error_msg}>{props.error}</Text>}
      </View>
    </View>
  );
};
export default PriceComponent;
const styles = StyleSheet.create({
  currency_container: {
    width: "35%",
    borderBottomWidth: 0.5,
    height: 60,
    paddingBottom: -20,
  },
  container: { flexDirection: "row", paddingLeft: 10 },
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
