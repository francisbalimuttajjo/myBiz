import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import EditComponent from "../../components/CashBook/Form";
import { RootState } from "../../redux/Store";
import { mainStackParams } from "../../types/types";
type Props = NativeStackScreenProps<mainStackParams, "editEntry">;
const Edit = ({ route, navigation }: Props) => {
  console.log(route.params.id);
  const { cashTransactions } = useSelector(
    (state: RootState) => state.cashBook
  );
  const item = cashTransactions.filter((el) => el._id === route.params.id)[0];
  return <EditComponent item={item} />;
};

export default Edit;
