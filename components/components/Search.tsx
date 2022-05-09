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
  
  
});