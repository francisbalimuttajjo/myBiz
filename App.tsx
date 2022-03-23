import { StatusBar } from "expo-status-bar";
import Header from './Header'
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Header name='bafra' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:4,
    backgroundColor: "#fff",
   
  },
  
});
