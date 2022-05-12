import axios from "axios";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCashItems } from "../redux/others/cashbook";
import { RootState } from "../redux/Store";
import { CashBookFormProps as Props, NavigationProps } from "../types/types";

const initialValues = {
  Remark: "",
  Amount: "",
  Category: "",
  type: "cash-in",
  itemTime: new Date(),
  itemDate: new Date(),
  paymentMode: "cash",
};

const UseFns = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProps>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { user } = useSelector((state: RootState) => state.user);
  const { categories } = useSelector((state: RootState) => state.cashBook);

  const handleSubmit = (values: Props["initialValues"]) => {
    setLoading(true);
    axios
      .post("http://192.168.43.96:5000/api/v1/cashItem", {
        paymentMode: values.paymentMode,
        entryDate: values.itemDate,
        itemTime: values.itemTime,
        Amount: +values.Amount,
        Category: values.Category,
        Remark: values.Remark,
        type: initialValues.type,
        user: user.email,
      })
      .then(() => {
        setLoading(false);
        dispatch(getCashItems({ user: user.email }));
        navigate("CashBook");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return { categories, initialValues, handleSubmit, loading };
};

export default UseFns;