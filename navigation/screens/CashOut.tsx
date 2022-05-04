import { useSelector } from "react-redux";
import Form from "../../components/CashBook/Form";
import { RootState } from "../../redux/Store";

const item = {
  Amount: "",
  Category: "",
  entryDate: new Date(),
  itemTime: new Date(),
  Remark: "",
  type: "cash-out",
  id: 0,
  paymentMode: "cash",
};

const CashOut = () => {
  const { categories } = useSelector((state: RootState) => state.cashBook);
  return (
    <Form
      type="cash-out"
      editing={false}
      categories={categories}
      initialValues={{
        Remark: "",
        Amount: "",
        Category: "",
        type: "cash-out",
        itemTime: new Date(),
        itemDate: new Date(),
        paymentMode:'cash'
      }}
    />
  );
};

export default CashOut;
