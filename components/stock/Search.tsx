import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import useSearchFns from "./useSearchFns";

const SearchBar = () => {
  const {
    clicked,
    searchPhrase,
    handleClicked,
    infoMsg,
    handleChange,
    displaySearchBar,
    clearSearchField,
  } = useSearchFns();

  return (
    <View>
      {displaySearchBar && (
        <View>
          <View style={styles.container}>
            <View
              style={
                clicked
                  ? styles.searchBar__clicked
                  : styles.searchBar__unclicked
              }
            >
              {/* search Icon */}
              <Feather
                name="search"
                size={20}
                color="black"
                style={{ marginLeft: 1 }}
              />
              {/* Input field */}
              <TextInput
                style={styles.input}
                placeholder="Search by Category or Name"
                value={searchPhrase}
                onChangeText={handleChange}
                onFocus={handleClicked}
              />
              {/* cross Icon, depending on whether the search bar is clicked or not */}
              {clicked && (
                <Entypo
                  name="cross"
                  size={20}
                  color="black"
                  style={{ padding: 1 }}
                  onPress={clearSearchField}
                />
              )}
            </View>
          </View>
          <Text style={{ alignSelf: "center", color: "tomato" }}>
            {infoMsg}
          </Text>
        </View>
      )}
    </View>
  );
};


export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
