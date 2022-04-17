import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { SearchProps as Props } from "../../types/types";

const SearchBar: React.FC<Props> = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={
            props.clicked
              ? styles.searchBar__clicked
              : styles.searchBar__unclicked
          }
        >
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="skyblue"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={props.searchPhrase}
            onChangeText={props.handleChange}
            onFocus={props.handleClicked}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {props.clicked && (
            <Entypo
              name="cross"
              size={20}
              color="skyblue"
              style={{ padding: 1 }}
              onPress={props.clearSearchField}
            />
          )}
        </View>
      </View>
      <Text style={styles.infoMsg_text}>{props.infoMsg}</Text>
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  infoMsg_text: { alignSelf: "center", color: "skyblue" },
  container: {
    marginHorizontal: "5%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",

    borderRadius: 40,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "skyblue",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",

    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 0.5,
    borderColor: "skyblue",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
