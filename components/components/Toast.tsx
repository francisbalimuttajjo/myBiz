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
// import * as React from "react";
// import { View, StyleSheet } from "react-native";
// import { Snackbar } from "react-native-paper";
// type Props = { message: string };
// const MyComponent = (props: Props) => {
//   const [visible, setVisible] = React.useState(true);

//   const onDismissSnackBar = () => setVisible(false);

//   return (
//     <View style={styles.container}>
//       <Snackbar
//         visible={visible}
//         duration={Infinity}
//         // wrapperStyle={{ bottom: 0, position: "absolute" }}
//         onDismiss={onDismissSnackBar}
//         action={{
//           label: "Undo",
//         }}
//       >
//         {props.message}
//       </Snackbar>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//     marginTop: "10%",
//     zIndex: 2,
//   },
// });

// export default MyComponent;
// // import React, { useState, useEffect } from "react";
// // import { ToastAndroid } from "react-native";

// // const Toast = (props: { visible: boolean; message: string }) => {
// //   if (props.visible) {
// //     ToastAndroid.showWithGravityAndOffset(
// //       props.message,
// //       ToastAndroid.LONG,
// //       ToastAndroid.TOP,
// //       40,
// //       50
// //     );
// //     return null;
// //   }
// //   return null;
// // };

// // export default Toast;
