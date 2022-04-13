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
import { FormProps as Props } from "../../types/types";

export const Form = (props: Props) => {
  const [price, setPrice] = React.useState(props.initialValues.buyingPrice);
  const [sellingPrice, setSellingPrice] = React.useState(
    props.initialValues.sellingPrice
  );
  const [isEnabled, setIsEnabled] = React.useState(
    props.initialValues.isReturnable
  );

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit, errors }) => (
        <ScrollView style={{ paddingBottom: 20 }}>
          <AddImageComponent image={props.initialValues.image} />
          <Wrapper>
            <Field component={AppFormField} name="name" title="name" required />
            <SelectComponent
              error={errors.category}
              categoryValue={props.categoryValue}
            />
            <Field
              component={AppFormField}
              name="description"
              title="description"
              required
            />
            <SwitchComponent
              isEnabled={isEnabled}
              toggleSwitch={toggleSwitch}
            />
          </Wrapper>
          <Wrapper>
            <PriceComponent
              currency={props.initialValues.buyingCurrency}
              price={price}
              title="buying"
              error={errors.buyingPrice}
              required
              setPrice={(val) => setPrice(val)}
            />
            <PriceComponent
              title="selling"
              currency={props.initialValues.sellingCurrency}
              price={sellingPrice}
              setPrice={(val) => setSellingPrice(val)}
            />
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

          <Button
            title={props.btn_title}
            submit={handleSubmit}
            loading={false}
          />
        </ScrollView>
      )}
    </Formik>
  );
};
export default Form;
