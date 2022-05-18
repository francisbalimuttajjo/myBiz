import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/others/stock";
import { RootState } from "../redux/Store";
import { FormProps, NavigationProps } from "../types/types";

const UseFns = () => {
  const { initialValues, categories } = useSelector(
    (state: RootState) => state.stock
  );

  const { user, token } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useDispatch();

  const index = (val: string) => categories.findIndex((el) => el.title === val);

  const handleSubmit = (values: FormProps["initialValues"]) => {
    console.log(categories[index(values.category)].id);
    setLoading(true);

    axios
      .post(
        `https://team-francisbalimuttajjo-backendmybiz-5695-master-olxjr2ly7a-wm.a.run.app/api/v1/stockItems`,
        {
          name: values.name,
          buyingPrice: values.buyingPrice,
          sellingPrice: +values.sellingPrice,
          buyingCurrency: values.buyingCurrency,
          packaging: values.packaging,
          category: values.category,
          productCategory_id: categories[index(values.category)].id,
          image: initialValues.image,
          description: values.description,
          sellingCurrency: values.sellingCurrency,
          stock: +values.stock,
          supplier: values.supplier,
          isReturnable: values.isReturnable,
          user: user.email,
        },
        { headers: { "Content-Type": "application/json", token } }
      )
      .then((res) => {
        setLoading(false);
        dispatch(getCategories({ user: user.email, token }));
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
