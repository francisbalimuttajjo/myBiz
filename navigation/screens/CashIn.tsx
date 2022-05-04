import { useSelector } from "react-redux";
import Form from "../../components/CashBook/Form";
import { RootState } from "../../redux/Store";

const item = {
  Amount: "",
  Category: "",
  entryDate: new Date(),
  itemTime: new Date(),
  Remark: "",
  type: "cash-in",
  id: 0,
  paymentMode: "cash",
};

const CashIn = () => {
  const { categories } = useSelector((state: RootState) => state.cashBook);
  return (
    <Form
      type="cash-in"
      editing={false}
      categories={categories}
      initialValues={{
        Remark: "",
        Amount: "",
        Category: "",
        type: "cash-in",
        itemTime: new Date(),
        itemDate: new Date(),
        paymentMode:'cash'
      }}
    />
  );
};

export default CashIn;
