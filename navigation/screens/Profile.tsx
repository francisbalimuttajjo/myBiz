import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  More: undefined,
  stock:undefined
 
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen = ({ navigation }:Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("More")}>goto</Text>
        </TouchableOpacity>
        <Text>Profile Page</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;
