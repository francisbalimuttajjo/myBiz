import React from "react";
import { mainStackParams } from "../../types/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Form from "../../components/CashBook/Form";
import useFns from "../../others/useEditCashEntryFns";

type Props = NativeStackScreenProps<mainStackParams, "editCashEntry">;

const Edit = ({ route }: Props) => {
  const { categories, initialValues, handleSubmit, loading } = useFns(
    route.params.id
  );

  return (
    <Form
      editing
      categories={categories}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default Edit;
