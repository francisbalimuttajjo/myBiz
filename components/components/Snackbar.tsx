import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Snackbar } from "react-native-paper";

export default function Snack(props: { message: string }) {
  const [visible, setVisible] = React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={10000}
        action={{
          label: "Undo",
          onPress: () => setVisible(false),
        }}
        style={{ backgroundColor: "black" }}
      >
        <View>
          <Text style={{ color: "#fff" }}>{props.message}</Text>
        </View>
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
});
