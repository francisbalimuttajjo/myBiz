import React from "react";
import { ScrollView } from "react-native";
import Button from "../components/Button";
import { Formik, Field } from "formik";
import PriceComponent from "../components/PriceComponent";
import AddImageComponent from "./ImageComponent";
import AppFormField from "../components/InputComponent";
import SwitchComponent from "../components/Switch";
import * as Yup from "yup";
import Wrapper from "../components/Wrapper";
import SelectComponent from "../components/SelectComponent";

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("name is required").label("name"),
  buyingPrice: Yup.string()
    .trim()
    .required("enter buying price")
    .label("buyingPrice"),
  stock: Yup.string().trim().required("enter stock bought").label("stock"),
  categories: Yup.string()
    .trim()
    .required("choose category")
    .label("categories"),
  description: Yup.string()
    .trim()
    .required("description is required")
    .label("description"),
});
export const MyReactNativeForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        categories: "",
        isReturnable: false,
        stock: '90',
        buyingPrice: 0,
        sellingPrice: 0,
        supplier:"",
        buyingCurrency: "ugx",
        sellingCurrency: "ugx",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <ScrollView style={{ paddingBottom: 20 }}>
          <AddImageComponent />
          <Wrapper>
            <Field component={AppFormField} name="name" title="name" />
            <SelectComponent error={errors.categories} />
            <Field
              component={AppFormField}
              name="description"
              title="description"
            />
            <SwitchComponent />
          </Wrapper>
          <Wrapper>
            <PriceComponent title="buying" error={errors.buyingPrice} />
            <PriceComponent title="selling" />
            <Field
              component={AppFormField}
              name="stock"
              title="stock Bought"
              numeric
              error={errors.stock}
            />
          </Wrapper>
          <Wrapper>
             <Field
              component={AppFormField}
              name="supplier"
              title="supplier"
              
              error={errors.supplier}
            />
          </Wrapper>

          <Button title="save Item" submit={handleSubmit} loading={false} />
        </ScrollView>
      )}
    </Formik>
  );
};
export default MyReactNativeForm;

