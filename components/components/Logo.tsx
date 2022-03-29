import Ionicon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";


const Logo = () => {
  return (
    <View
     
      style={styles.container}>
      
      <Ionicon name="cash-outline" size={40} color="skyblue" />
      <Text style={styles.text1}> My</Text>
      <Text style={{ ...styles.text1,color:'skyblue' }}>Bizz</Text>
    </View>
  );
};
export default Logo;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: 10,
    paddingLeft: 12,
    alignItems: "center",
  },
  
  text1: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
