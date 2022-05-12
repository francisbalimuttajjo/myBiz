import React from "react";
import Form from "../../components/CashBook/Form";
import useFns from "../../others/useCashInFns";

const CashIn = () => {
  const { categories, initialValues, handleSubmit, loading } = useFns();

  return (
    <Form
      editing={false}
      categories={categories}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default CashIn;
