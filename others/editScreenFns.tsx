import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, resetCart } from "../redux/StockSlice";
import { RootState } from "../redux/Store";
import { FormProps, NavigationProps } from "../types/types";

const EditScreenFns = (_id: number | undefined) => {
  const { availableStock } = useSelector((state: RootState) => state.stock);
  const { user } = useSelector((state: RootState) => state.user);
  const item = availableStock.filter((el) => el.id === _id)[0];
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProps>();

  const {
    sellingCurrency,
    buyingCurrency,
    sellingPrice,
    buyingPrice,
    stock,
    name,
    supplier,
    packaging,
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
    packaging,
    stock: stock.toString(),
    name,
    supplier,
    image,
    id,
  };

  const handleSubmit = (values: FormProps["initialValues"]) => {
    setLoading(true);
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
      packaging,
    } = values;

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
        packaging,
        user: user.email,
      })
      .then(() => {
        setLoading(false);
        dispatch(getItems({ email: user.email }));
        navigate("Stock");
        dispatch(resetCart());
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };
  return {
    handleSubmit,
    loading,
    initialValues,
    error,
  };
};

export default EditScreenFns;
