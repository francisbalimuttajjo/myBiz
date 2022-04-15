import { useSelector } from "react-redux";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../../components/form/NewStock";
import { RootState } from "../../redux/Store";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mainStackParams } from "../../types/types";

type Props = NativeStackScreenProps<mainStackParams, "Details">;

const EditStock = ({ route, navigation }: Props) => {
  const { availableStock } = useSelector((state: RootState) => state.stock);
  const item = availableStock.filter((el) => el._id === route.params.id)[0];
  const {
    sellingCurrency,
    buyingCurrency,
    sellingPrice,
    buyingPrice,
    stock,
    name,
    supplier,
    image,
    category,
    description,
    isReturnable,
    _id,
  } = item;

  const initialValues = {
    sellingCurrency,
    category,
    description,
    isReturnable,
    buyingCurrency,
    sellingPrice,
    buyingPrice,
    stock: stock.toString(),
    name,
    supplier,
    image,
    _id,
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Form
          initialValues={initialValues}
          btn_title="Edit"
          categoryValue={initialValues.category}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default EditStock;
