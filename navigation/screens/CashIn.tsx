import Form from "../../components/CashBook/Form";

const item = {
  amount: "",
  category: "",
  entryDate: new Date(),
  itemTime: new Date(),
  title: "",
  type: "cash-in",
  _id: "",
  paymentMode: "cash",
};

const CashIn = () => {
  return <Form item={item} editing={false} />;
};

export default CashIn;
