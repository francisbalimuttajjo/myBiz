import { Picker } from "@react-native-picker/picker";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import InputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import SwitchComponent from "../components/Switch";
import Wrapper from "../components/Wrapper";
import AddImageComponent from "./ImageComponent";
const values = [
  { label: "Choose Category", value: "null" },
  { label: "food", value: "food" },
  { label: "books", value: "books" },
  { label: "books", value: "books" },
];
const NewItem = () => {
  const [value, setValue] = React.useState(values[0].value);
  const handleChange = (val: string) => setValue(val);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <AddImageComponent />
      <Wrapper>
        <InputComponent title="Name" />
        <SelectComponent
          values={values}
          value={value}
          onChange={handleChange}
        />
        <InputComponent title="Description" />
        <SwitchComponent isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </Wrapper>
          <Wrapper>
              
      </Wrapper>
    </View>
  );
};

export default NewItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
