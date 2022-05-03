import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/StockSlice";
import { RootState } from "../redux/Store";
import { FormProps, NavigationProps } from "../types/types";

const UseFns = () => {
  const { initialValues } = useSelector((state: RootState) => state.stock);
  const [loading, setLoading] = React.useState(false);
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const handleSubmit = (values: FormProps["initialValues"]) => {
    setLoading(true);

    axios
      .post(`http://192.168.43.96:5000/api/v1/items`, {
        name: values.name,
        buyingPrice: values.buyingPrice,
        sellingPrice: +values.sellingPrice,
        buyingCurrency: values.buyingCurrency,
        packaging: "each",
        category: values.category,
        image: initialValues.image,
        description: values.description,
        sellingCurrency: values.sellingCurrency,
        stock: +values.stock,
        supplier: values.supplier,
        isReturnable: values.isReturnable,
      })
      .then((res) => {
        setLoading(false);
        dispatch(getItems());
        navigate("Stock");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return { loading, handleSubmit, initialValues };
};

export default UseFns;
