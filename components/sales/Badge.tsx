import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import Search from "../components/Search";
import useFns from "../stock/useFns";
import { getTotal } from "../../utils";
import { NavigationProps } from "../../types/types";
import { useNavigation } from "@react-navigation/native";

const Badge = () => {
  const { cart } = useSelector((state: RootState) => state.stock);
  console.log({ cart });
  const total = getTotal(cart);
  const { navigate } = useNavigation<NavigationProps>();
  const handlePress = () => {
    if (total < 1) return;
    navigate("Cart");
  };

  const {
    clicked,
    searchPhrase,
    handleClicked,
    infoMsg,
    handleChange,
    clearSearchField,
  } = useFns();
  return (
    <View style={styles.container}>
      <View style={styles.search_container}>
        <Search
          clicked={clicked}
          handleChange={handleChange}
          handleClicked={handleClicked}
          searchPhrase={searchPhrase}
          placeholder="Search..."
          clearSearchField={clearSearchField}
          infoMsg={infoMsg}
        />
      </View>
      <View style={styles.badge_container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ flexDirection: "row" }}
          onPress={handlePress}
        >
          <Ionicon name="cart-outline" size={35} color="skyblue" />
          <View style={styles.badge}>
            <Text style={styles.badge_text}>{total} </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  search_container: {
    width: "80%",
    marginLeft: -10,
  },
  badge_container: { width: "10%", justifyContent: "center", marginTop: -10 },
  container: {
    marginTop: "2%",
    flexDirection: "row",
  },
  badge: {
    width: 24,
    height: 24,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: -10,
    marginLeft: -20,
  },
  badge_text: { color: "white", fontWeight: "bold" },
});