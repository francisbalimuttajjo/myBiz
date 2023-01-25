import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="skyblue" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: '10%',
  },
});

export default LoadingComponent;
