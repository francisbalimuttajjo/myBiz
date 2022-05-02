import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CashBook from "../../components/CashBook/Form";
import { mainStackParams } from "../../types/types";
type Props = NativeStackScreenProps<mainStackParams, "cash">;
const Cash = ({ route, navigation }: Props) => {
  
  return <CashBook />;
};

export default Cash;
