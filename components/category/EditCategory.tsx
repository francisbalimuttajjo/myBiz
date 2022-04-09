import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
type Props = {
  item: { title?: string; id?: string };
};

const Category = (props: Props) => {
  return (
    <View style={styles.list_item}>
      <Text style={styles.title}>Edit {props.item.title}</Text>
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  list_item: {
    borderBottomWidth: 0.5,
    paddingVertical: 15,
    marginBottom: 10,
    paddingHorizontal: 30,
    width: "90%",
    borderColor: "#e0e1e2",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { position: "absolute", right: 0 },
  title: { textTransform: "capitalize" },
});
