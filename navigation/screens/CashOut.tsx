import { useSelector } from "react-redux";
import Form from "../../components/CashBook/Form";
import { RootState } from "../../redux/Store";

const initialValues = {
  Remark: "",
  Amount: "",
  Category: "",
  type: "cash-out",
  itemTime: new Date(),
  itemDate: new Date(),
  paymentMode: "cash",
};

const CashOut = () => {
  const { categories } = useSelector((state: RootState) => state.cashBook);
  return (
    <Form
     
      editing={false}
      categories={categories}
      initialValues={initialValues}
    />
  );
};

export default CashOut;
