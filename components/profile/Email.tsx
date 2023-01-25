import { Text, View, StyleSheet } from "react-native";
import Ionicon from "react-native-vector-icons/Feather";

const Email = (props: { email: string }) => {
  return (
    <View style={styles.main_container}>
      <View style={{ width: "30%" }}>
        <Ionicon name="mail" size={35} color="#5e5a5a" />
      </View>
      <View style={{ width: "60%" }}>
        <Text style={{ fontSize: 20 }}>{props.email}</Text>
        <Text style={{ fontSize: 14, opacity: 0.5 }}>Personal</Text>
      </View>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({
  main_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "6%",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    borderColor: "#e0e1e2",
    borderBottomWidth: 1,
  },
});
