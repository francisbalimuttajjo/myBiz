import React from "react";
import Form from "../../components/form/MainForm";
import useFns from "../../others/newItemScreenFns";

const NewItem = () => {
  const { loading, handleSubmit, initialValues } = useFns();

  return (
    <Form
      initialValues={initialValues}
      btn_title="save Item"
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default NewItem;
