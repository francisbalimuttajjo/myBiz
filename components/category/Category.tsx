import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
type Item = {
  title: string;
  id: string;
};
type Props = {
  item: Item;
};
type NavigationProps = {
  navigate: (route: string, params: { item: Item }) => void;
};
const Category = (props: Props) => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <View style={styles.list_item}>
      <Text style={styles.title}>{props.item.title}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate("categoriesEdit", { item: props.item })}
        style={styles.icon}
      >
        <Ionicon name="pencil" size={25} color="skyblue" />
      </TouchableOpacity>
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
