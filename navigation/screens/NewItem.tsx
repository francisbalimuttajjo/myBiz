import React from "react";
import Form from "../../components/form/MainForm";
import useFns from "../../others/newItemScreenFns";

const NewItem = () => {
  const { loading, handleSubmit, initialValues, error } = useFns();

  return (
    <Form
      initialValues={initialValues}
      btn_title="save Item"
      loading={loading}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default NewItem;
