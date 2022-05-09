import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/StockSlice";
import { RootState } from "../redux/Store";
import { FormProps, NavigationProps } from "../types/types";

const UseFns = () => {
  const { initialValues } = useSelector((state: RootState) => state.stock);
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
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
        packaging: values.packaging,
        category: values.category,
        image: initialValues.image,
        description: values.description,
        sellingCurrency: values.sellingCurrency,
        stock: +values.stock,
        supplier: values.supplier,
        isReturnable: values.isReturnable,
        user: user.email,
      })
      .then((res) => {
        setLoading(false);
        dispatch(getItems({ email: user.email }));
        navigate("Stock");
      })
      .catch((err) => {
        setLoading(false);

        setError(err.response.data.data);
      });
  };
  return { loading, handleSubmit, initialValues, error };
};

export default UseFns;
