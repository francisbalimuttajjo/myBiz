import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import Ionicon from "react-native-vector-icons/Ionicons";
import AddItemsComponent from "./AddItems";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  openToolTip: () => void;
  visible: boolean;
  closeToolTip: () => void;
}

const TooltipComponent: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Tooltip
        tooltipStyle={{ marginTop: -30 }}
        contentStyle={{ width: 200, minHeight: 100 }}
        showChildInTooltip={false}
        arrowSize={{ width: 16, height: 24 }}
        isVisible={props.visible}
        content={<AddItemsComponent hideToolKit={props.closeToolTip} />}
        placement="bottom"
        onClose={props.closeToolTip}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.text_container, styles.container]}
          onPressIn={props.openToolTip}
        >
          <Ionicon name="md-add-circle-outline" color="skyblue" size={20} />
          <Text style={styles.text}> Add Item</Text>
        </TouchableOpacity>
      </Tooltip>
    </View>
  );
};

export default TooltipComponent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "skyblue",
    marginRight: 10,
    fontSize: 24,
  },

  text_container: {
    marginRight: 5,
    color: "skyblue",
    flexDirection: "row",
  },
});
