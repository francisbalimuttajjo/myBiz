import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TextInputComponent from "../components/InputComponent";
import SelectComponent from "../components/SelectComponent";
import SwitchComponent from "../components/Switch";
import Wrapper from "../components/Wrapper";
import PriceComponent from "../components/PriceComponent";
import AddImageComponent from "./ImageComponent";
import StockComponent from "../components/Stock";
import Supplier from "../components/Supplier";
import Button from "../components/Button";
const values = [
  { label: "Choose Category", value: "null" },
  { label: "food", value: "food" },
  { label: "books", value: "books" },
  { label: "books", value: "books" },
];
const currencies = [
  {
    label: "ugx",
    value: "ugx",
  },
  {
    label: "ksh",
    value: "ksh",
  },
  {
    label: "usd",
    value: "usd",
  },
];

const initialValues = {
  Name: "",
  Description: "",
  category: values[0].value,
  buyingPrice: 0,
  sellingPrice: 0,
  stock: 0,
  supplier: "",
  isEnabled: true,
};
const NewItem = () => {
  const [formValues, setFormValues] = React.useState(initialValues);
  const [category, setCategory] = React.useState(formValues.category);
  const [buyingCurrency, setBuyingCurrency] = React.useState(
    currencies[0].value
  );
  const [sellingCurrency, setSellingCurrency] = React.useState(
    currencies[0].value
  );
  const handleChange = (val: string) => setCategory(val);
  const handleBuyingCurrency = (val: string) => setBuyingCurrency(val);
  const handleSellingCurrency = (val: string) => setSellingCurrency(val);
  const [isEnabled, setIsEnabled] = React.useState(formValues.isEnabled);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onChange = (
    name: string,
    event: { nativeEvent: { text: number | string } }
  ) => {
    const { text } = event.nativeEvent;
    setFormValues({ ...formValues, [name]: text });
  };

  console.log({ formValues });

  return (
    <ScrollView style={{ paddingBottom: 20 }}>
      <AddImageComponent />
      <Wrapper>
        <TextInputComponent
          onChangeText={onChange}
          title="Name"
          value={formValues.Name}
        />
        <SelectComponent
          values={values}
          value={category}
          onChange={handleChange}
        />
        <TextInputComponent
          onChangeText={onChange}
          title="Description"
          value={formValues.Description}
        />

        <SwitchComponent isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </Wrapper>
      <Wrapper>
        <PriceComponent
          price={formValues.buyingPrice}
          name="buyingPrice"
          values={currencies}
          value={buyingCurrency}
          title="buying Price"
          onChange={onChange}
          handleChange={handleBuyingCurrency}
        />
        <PriceComponent
          price={formValues.sellingPrice}
          name="sellingPrice"
          values={currencies}
          value={sellingCurrency}
          title="selling Price"
          onChange={onChange}
          handleChange={handleSellingCurrency}
        />
        <StockComponent
          name="stock"
          title=" Stock Bought"
          onChange={onChange}
          stock={formValues.stock}
        />
      </Wrapper>
      <Wrapper>
        <Supplier
          onChange={onChange}
          name="supplier"
          supplier={formValues.supplier}
        />
      </Wrapper>
      <Button title="save Item" />
    </ScrollView>
  );
};

export default NewItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
