import React from "react";
import { StyleSheet,  View, Text } from "react-native";
import { SearchProps as Props } from "../../types/types";
import { Searchbar } from "react-native-paper";
const SearchBar: React.FC<Props> = (props) => {
  
  return (
    
    <View>
      <View style={styles.container}>
        <Searchbar
          placeholder={props.placeholder}
          onChangeText={props.onChangeSearch}
          value={props.searchQuery}
        />
      </View>
      <Text style={styles.infoMsg_text}>{props.infoMsg}</Text>
    </View>
  );
};

export default SearchBar;

// // styles
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
// import * as React from "react";
// import { Searchbar } from "react-native-paper";

// const MyComponent = () => {
//   const [searchQuery, setSearchQuery] = React.useState("");
//   console.log(searchQuery);
//   const onChangeSearch = (query) => setSearchQuery(query);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };

// export default MyComponent;
