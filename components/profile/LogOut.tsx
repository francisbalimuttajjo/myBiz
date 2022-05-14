import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Ionicon from "react-native-vector-icons/Entypo";
const LogOut = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={loading}
        style={styles.icon_container}
      >
        {!loading && <Ionicon name="log-out" size={25} color="white" />}
        {loading && <ActivityIndicator size="small" color="white" />}
      </TouchableOpacity>
    </View>
  );
};

export default LogOut;
const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    paddingVertical: "5%",
    alignItems: "flex-end",
    paddingHorizontal: "5%",
  },
  icon_container: {
    backgroundColor: "skyblue",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
