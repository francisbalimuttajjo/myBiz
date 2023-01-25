import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import EntryDetails from "../../components/CashBook/Details";
import { RootState } from "../../redux/Store";
import { mainStackParams } from "../../types/types";

type Props = NativeStackScreenProps<mainStackParams, "entryDetails">;

const Details = ({ route, navigation }: Props) => {
  const { cashTransactions } = useSelector(
    (state: RootState) => state.cashBook
  );
  const item = cashTransactions.filter((el) => el.id === route.params.id);

  return <EntryDetails item={item[0]} />;
};

export default Details;
