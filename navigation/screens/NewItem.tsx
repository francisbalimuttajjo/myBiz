import { useSelector } from "react-redux";
import Form from "../../components/form/NewStock";
import { RootState } from "../../redux/Store";

const NewItem = () => {
  const { initialValues } = useSelector((state: RootState) => state.stock);
  return (
    <Form
      initialValues={initialValues}
      btn_title="save Item"
      categoryValue=""
    />
  );
};

export default NewItem;
