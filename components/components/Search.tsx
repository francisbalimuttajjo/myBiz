import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

type Props = {
  clicked: boolean;
  handleChange: (a: string) => void;
  handleClicked: () => void;
  searchPhrase: string;
  placeholder: string;
  clearSearchField: () => void;
  infoMsg?: string;
};

const SearchBar: React.FC<Props> = (props) => {
  return (
    <View>
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
              color="black"
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
                color="black"
                style={{ padding: 1 }}
                onPress={props.clearSearchField}
              />
            )}
          </View>
        </View>
        <Text style={styles.infoMsg_text}>{props.infoMsg}</Text>
      </View>
    </View>
  );
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  infoMsg_text: { alignSelf: "center", color: "skyblue" },
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
    borderRadius: 40,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
