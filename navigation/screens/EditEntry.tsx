import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Form from "../../components/CashBook/Form";
import { RootState } from "../../redux/Store";
import { mainStackParams } from "../../types/types";
type Props = NativeStackScreenProps<mainStackParams, "editEntry">;

const Edit = ({ route }: Props) => {
  const { cashTransactions, categories } = useSelector(
    (state: RootState) => state.cashBook
  );

  const item = cashTransactions.filter((el) => el.id === route.params.id)[0];
  console.log(item)
  const initialValues = {
    Amount: item.Amount.toString(),
    Remark: item.Remark,
    Category: item.Category,
    type: item.type,
    itemTime: item.itemTime,
    itemDate: item.entryDate,
    paymentMode: item.paymentMode,
  };

  return (
    <Form
      type={item.type}
      editing
      categories={categories}
      initialValues={initialValues}
    />
  );
};

export default Edit;
