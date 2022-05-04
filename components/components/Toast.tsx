import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import Toast from 'react-native-toast-message';

const MyComponent = (props: { message: string }) => {
  const [visible, setVisible] = React.useState(true);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={Infinity}
        
        action={{
          label: "Undo",
        }}
      >
        {props.message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default MyComponent;