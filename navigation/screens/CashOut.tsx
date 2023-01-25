import React from "react";
import Form from "../../components/CashBook/Form";
import useFns from "../../others/useCashOutFns";

const CashOut = () => {
  const { categories, initialValues, handleSubmit, loading } = useFns();

  return (
    <Form
      handleSubmit={handleSubmit}
      editing={false}
      categories={categories}
      initialValues={initialValues}
      loading={loading}
    />
  );
};

export default CashOut;
