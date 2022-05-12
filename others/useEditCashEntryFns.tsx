import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { getCashItems } from "../redux/others/cashbook";
import { useNavigation } from "@react-navigation/native";
import {
  CashBookFormProps as FormProps,
  NavigationProps,
} from "../types/types";

const UseFns = (id?: number) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProps>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const { cashTransactions, categories } = useSelector(
    (state: RootState) => state.cashBook
  );
  const item = cashTransactions.filter((el) => el.id === id)[0];

  const { user } = useSelector((state: RootState) => state.user);

  const initialValues = {
    Amount: item.Amount.toString(),
    Remark: item.Remark,
    Category: item.Category,
    type: item.type,
    itemTime: item.itemTime,
    itemDate: item.entryDate,
    paymentMode: item.paymentMode,
  };

  const handleSubmit = (values: FormProps["initialValues"]) => {
    setLoading(true);
    axios
      .put(`http://192.168.43.96:5000/api/v1/cashItem/${id}`, {
        paymentMode: values.paymentMode,
        entryDate: values.itemDate,
        itemTime: values.itemTime,
        Amount: +values.Amount,
        Category: values.Category,
        Remark: values.Remark,
        type: values.type,
        user: user.email,
      })
      .then((res) => {
        setLoading(false);
        dispatch(getCashItems({ user: user.email }));
        navigate("CashBook");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return { initialValues, handleSubmit, loading, categories };
};

export default UseFns;
