import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Form from "../../components/form/MainForm";
import useFns from "../../others/editScreenFns";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mainStackParams } from "../../types/types";

type Props = NativeStackScreenProps<mainStackParams, "Details">;

const EditStock = ({ route }: Props) => {
  const { handleSubmit, loading, initialValues, error } = useFns(
    route.params.id
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Form
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          btn_title="Edit"
          loading={loading}
          error={error}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default EditStock;
