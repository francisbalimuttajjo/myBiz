import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mainStackParams } from "../../types/types";

type Props = NativeStackScreenProps<mainStackParams, "Details">;

const Details = ({ route, navigation }: Props) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Details page for id {id}</Text>
    </View>
  );
};

export default Details;
