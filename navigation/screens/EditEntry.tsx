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
  // const { Amount: 1200,  Remark: "book keeping",
  // category: "labour",
  // entryDate: "2022-04-20T05:35:55.155Z",
  // id: 0,
  // itemTime: "2022-04-26T14:55:55.155Z",
  // paymentMode: "cash",
  // type: "cash-in"}=item

  return (
    <Form
      type={item.type}
      editing
      categories={categories}
      initialValues={{
        Amount: item.Amount.toString(),
        Remark: item.Remark,
        Category: item.Category,
        type: item.type,
        itemTime: item.itemTime,
        itemDate: item.entryDate,
        paymentMode: item.paymentMode,
      }}
    />
  );
};

export default Edit;
