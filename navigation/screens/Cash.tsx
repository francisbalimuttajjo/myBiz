import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import CashBook from "../../components/CashBook/Form";
import { RootState } from "../../redux/Store";
import { mainStackParams } from "../../types/types";
type Props = NativeStackScreenProps<mainStackParams, "cash">;

const initialValues = {
  Amount: "",
  Remark: "",
  Category: "",
  type: "cash-out",
  itemTime: new Date(),
  itemDate: new Date(),
  paymentMode:'cash'
};
const item = {
  Amount: 1200,
  Category: "labour",
  id: 4,
  entryDate: "2022-12-20T05:35:55.155Z",
  itemTime: "2022-12-26T20:01:55.155Z",
  Remark: "book keeping",
  type: "cash-in",
  paymentMode: "online",
};
const Cash = ({ route, navigation }: Props) => {
  const { categories } = useSelector((state: RootState) => state.cashBook);
  return (
    <CashBook
      type={item.type}
      categories={categories}
      initialValues={initialValues}
    />
  );
};

export default Cash;
