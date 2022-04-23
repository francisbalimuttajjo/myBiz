import Form from "../../components/CashBook/Form";

const item = {
  amount: "",
  category: "",
  entryDate: new Date(),
  itemTime: new Date(),
  title: "",
  type: "cash-out",
  _id: "",
  paymentMode: "cash",
};

const CashOut = () => {
  return <Form item={item} editing={false} />;
};

export default CashOut;
