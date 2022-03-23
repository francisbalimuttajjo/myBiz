import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header name="bafra"
      // imageSrc='https://reactnative.dev/img/tiny_logo.png'
       imageSrc='https://storage.googleapis.com/download/storage/v1/b/task-tracker-336811.appspot.com/o/%2Fusers%2Fimgs%2Fuser-61d5e487b45306781f0cea46-1642267623054.jpeg?generation=1642267623313359&alt=media'
      />
      <Categories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    backgroundColor: "#fff",
  },
});
