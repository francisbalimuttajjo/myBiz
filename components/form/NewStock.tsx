import React from "react";
import { ScrollView } from "react-native";
import Button from "../components/Button";
import { Formik, Field } from "formik";
import PriceComponent from "./PriceComponent";
import AddImageComponent from "./ImageComponent";
import AppFormField from "./InputComponent";
import SwitchComponent from "./Switch";
import validationSchema from "./ValidationSchema";
import Wrapper from "../components/Wrapper";
import SelectComponent from "./SelectComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

export const Form = () => {
  const { initialValues } = useSelector((state: RootState) => state.stock);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, errors }) => (
        <ScrollView style={{ paddingBottom: 20 }}>
          <AddImageComponent />
          <Wrapper>
            <Field component={AppFormField} name="name" title="name" required />
            <SelectComponent error={errors.categories} />
            <Field
              component={AppFormField}
              name="description"
              title="description"
              required
            />
            <SwitchComponent />
          </Wrapper>
          <Wrapper>
            <PriceComponent
              title="buying"
              error={errors.buyingPrice}
              required
            />
            <PriceComponent title="selling" />
            <Field
              component={AppFormField}
              name="stock"
              title="stock Bought"
              numeric
              error={errors.stock}
              required
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
export default Form;
