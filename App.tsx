import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Container from "./navigation/MainNavigation";
import React from "react";


//gggg
//
const App = () => {
 
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
