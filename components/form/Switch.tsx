import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
type Props = {
  isEnabled: boolean;
  toggleSwitch: () => void;
};
const SwitchComponent: React.FC<Props> = ({ isEnabled, toggleSwitch }) => {
  const { setFieldValue } = useFormikContext();
  const change = () => {
    setFieldValue("isReturnable", !isEnabled);
    toggleSwitch();
  };
  return (
    <View style={styles.container}>
      <Text>Returnable</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "skyblue" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={change}
        value={isEnabled}
      />
      <Text>{isEnabled ? "Yes" : "No"} </Text>
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
