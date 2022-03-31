import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";


export type Props = {
  item: {
    _id: string;
    image?: string;
    name: string;
    currency: string;
    description: string;
    stock: number;
    sellingPrice: number;
    packaging: string;
    category: string;
  };
};

type NavigationProps = {
  navigate: (route: string, params: { id: string }) => void;
};
const Item: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigate("Details", { id: props.item._id })}
        activeOpacity={0.9}
        style={styles.container}
      >
        <View style={{ ...styles.icon, width: "30%" }}>
          {props.item.image && (
            <Image
              style={styles.image}
              source={{
                uri: props.item.image,
              }}
            />
          )}
          {!props.item.image && (
            <View style={styles.icon}>
              <Ionicon name="camera-outline" size={80} />
              <Text style={{ marginTop: -10 }}>No Image </Text>
            </View>
          )}
        </View>
        <View style={styles.details_container}>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>{props.item.name}</Text>
            <Text style={styles.description}>{props.item.description}</Text>
          </View>
          <View>
            <Text>Available:{props.item.stock}</Text>
            <View style={styles.details}>
              <Text style={styles.align}>{props.item.currency}</Text>
              <Text style={styles.price}>{props.item.sellingPrice}&nbsp;</Text>
              <Text style={styles.align}>&#64;</Text>
              <Text style={{ ...styles.align, textTransform: "capitalize" }}>
                {props.item.packaging}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.icon_container}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => console.log("editing")}>
              <Ionicon name="pencil" size={20} color="skyblue" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => console.log("deleting")}>
            <Ionicon name="trash-outline" size={20} color="skyblue" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  icon_container: {
    alignSelf: "flex-start",
    padding: 10,
    width: "20%",
    display: "flex",
    flexDirection: "row",
  },
  align: { alignSelf: "center" },

  price: { fontSize: 20, color: "skyblue", fontWeight: "bold" },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  details_container: {
    width: "50%",
    padding: 6,
    marginLeft: 6,
    display: "flex",
  },
  description: { marginTop: -4, fontSize: 12, textTransform: "capitalize" },
  title: {
    fontWeight: "600",
    fontSize: 20,
    textTransform: "capitalize",
    color: "skyblue",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainer: { display: "flex", justifyContent: "center", margin: 6 },
  container: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 6, // Android
    height: 120,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
    padding: 6,
  },

  image: {
    width: 100,
    height: 110,
    borderRadius: 10,
  },
});
