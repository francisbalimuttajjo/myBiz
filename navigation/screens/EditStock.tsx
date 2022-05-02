import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../../components/form/NewStock";
import { RootState } from "../../redux/Store";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mainStackParams, FormProps } from "../../types/types";
import { getItems } from "../../redux/StockSlice";
type Props = NativeStackScreenProps<mainStackParams, "Details">;

const EditStock = ({ route, navigation }: Props) => {
  const { availableStock } = useSelector((state: RootState) => state.stock);
  const item = availableStock.filter((el) => el.id === route.params.id)[0];
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

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
    id,
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
    id,
  };

  const handleSubmit = (values: FormProps["initialValues"]) => {
    console.log(values);
    const {
      buyingCurrency,
      buyingPrice,
      category,
      description,
      isReturnable,
      name,
      sellingCurrency,
      sellingPrice,
      supplier,
    } = values;
    setLoading(true);
    axios
      .put(`http://192.168.43.96:5000/api/v1/items/${id}`, {
        buyingCurrency,
        buyingPrice,
        category,
        description,
        isReturnable,
        name,
        sellingCurrency,
        sellingPrice,
        supplier,
        stock: +values.stock,
        image: item.image,
      })
      .then((res) => {
        setLoading(false);
        dispatch(getItems());
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Form
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          btn_title="Edit"
          categoryValue={initialValues.category}
          loading={loading}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default EditStock;
