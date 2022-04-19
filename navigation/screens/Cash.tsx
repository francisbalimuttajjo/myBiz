import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CashBook from "../../components/CashBook/EditCashEntry";
import { mainStackParams } from "../../types/types";
type Props = NativeStackScreenProps<mainStackParams, "cash">;
const Cash = ({ route, navigation }: Props) => {
  console.log(route);
  return <CashBook />;
};

export default Cash;
