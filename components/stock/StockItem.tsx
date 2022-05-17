import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from "react-native";
import axios from "axios";
import Ionicon from "react-native-vector-icons/Ionicons";
import useFns from "./useDeleteFns";
import { StockItemProps as Props } from "../../types/types";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/others/stock";

const Item: React.FC<Props> = (props) => {
  const { createAlert, confirmDelete, user, token } = useFns();
  const dispatch = useDispatch();

  if (confirmDelete) {
    axios
      .delete(
        `http://192.168.43.96:5000/api/v1/stockItems/${props.item.id}`,

        { headers: { "Content-Type": "application/json", token } }
      )
      .then(() => dispatch(getCategories({ user: user.email, token })))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => props.handlePress(props.item.id)}
        activeOpacity={0.6}
        style={styles.container}
      >
        <View style={{ ...styles.icon, width: "30%" }}>
          {props.item.image ? (
            <Image
              style={{ ...styles.image, marginLeft: props.cartItem ? -20 : 10 }}
              source={{
                uri: props.item.image,
              }}
            />
          ) : (
            <Pressable
              onPress={() => props.handlePress(props.item.id)}
              style={styles.icon}
            >
              <Ionicon name="camera-outline" size={80} />
              <Text style={{ marginTop: -10 }}>No Image </Text>
            </Pressable>
          )}
        </View>

        <View style={styles.details_container}>
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.title}>{props.item.name}</Text>
            <Text style={styles.description}>{props.item.description}</Text>
          </View>
          <View>
            <Text
              style={{ color: props.item.stock === 0 ? "tomato" : "black" }}
            >
              {props.item.stock === 0
                ? `out of stock`
                : `Available:${props.item.stock}`}
            </Text>

            <View style={styles.details}>
              <Text style={styles.align}>{props.item.sellingCurrency}</Text>
              <Text style={styles.price}>{props.item.sellingPrice}&nbsp;</Text>
              {props.item.packaging !== "" && (
                <>
                  <Text style={styles.align}>&#64;</Text>
                  <Text
                    style={{ ...styles.align, textTransform: "capitalize" }}
                  >
                    {props.item.packaging}
                  </Text>
                </>
              )}
              {/* <Text style={styles.align}>&#64;</Text>
              <Text style={{ ...styles.align, textTransform: "capitalize" }}>
                {props.item.packaging}
              </Text> */}
            </View>
          </View>
        </View>
        {!props.cartItem && (
          <View style={styles.icon_container}>
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.handlePress(props.item.id)}
              >
                <Ionicon name="pencil" size={20} color="skyblue" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={createAlert}>
              <Ionicon name="trash-outline" size={20} color="skyblue" />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  align: { alignSelf: "center" },
  price: { fontSize: 20, color: "skyblue", fontWeight: "bold" },
  description: { marginTop: -4, fontSize: 12, textTransform: "capitalize" },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 6,
    marginBottom: 12,
  },
  icon_container: {
    padding: 10,
    width: "20%",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  details: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  details_container: {
    width: "50%",
    padding: 6,
    marginLeft: 12,
  },

  title: {
    fontWeight: "600",
    fontSize: 20,
    textTransform: "capitalize",
    color: "skyblue",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },

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
