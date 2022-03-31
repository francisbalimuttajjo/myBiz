import { ActivityIndicator, StyleSheet,  View } from "react-native";

const LoadingComponent = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="skyblue" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default LoadingComponent;
