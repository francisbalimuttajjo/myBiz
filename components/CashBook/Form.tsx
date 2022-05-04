import React from "react";
import * as Yup from "yup";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Input from "./FloatingInput";
import { Formik, Field } from "formik";
import CategoriesPicker from "./PickerComponent";
import EntryTypeBtns from "./EntryTypeBtns";
import { CashBookFormProps as Props } from "../../types/types";
import DateComponent from "./DateComponent";
import PaymentMode from "./PaymentMode";

export const Form = (props: Props) => {
  const handleSubmit = (values: Props["initialValues"]) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    Amount: Yup.number().required().min(1, "Amount").label("Amount"),
    Remark: Yup.string().trim().required("Remark is required").label("Remark"),
    type: Yup.string().trim().required("type is required").label("type"),
    Category: Yup.string()
      .trim()
      .required("Category is required")
      .label("Category"),
  });

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, errors }) => (
        <View style={styles.main_container}>
          <ScrollView style={{ paddingTop: props.editing ? "2%" : "10%" }}>
            {props.editing && <EntryTypeBtns />}
            <DateComponent
              time={props.initialValues.itemTime}
              date={props.initialValues.itemDate}
            />
            <View style={styles.input_container}>
              <Field
                component={Input}
                name="Amount"
                label="Amount"
                keyboard
                type={props.type}
                isAmount
              />
              <Field
                component={Input}
                name="Remark"
                label="Remark"
                type={props.type}
              />
            </View>

            <CategoriesPicker
              error={errors.Category}
              categories={props.categories}
              initialValues={props.initialValues}
            />
            <PaymentMode paymentMode={props.initialValues.paymentMode} />
          </ScrollView>

          <TouchableOpacity
            onPress={handleSubmit}
            activeOpacity={0.8}
            style={styles.btn_container}
          >
            <Text style={styles.btn_text}>
              {!props.editing ? "SAVE" : "UPDATE"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default Form;
// import React from "react";
// import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
// import { CashItemProps } from "../../types/types";
// import { getDate } from "../../utils";
// import Btns from "./EntryType";
// import Input from "./FloatingInput";
// import DateComponent from "./DateComponent";
// import PaymentMode from "./Mode";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { Picker } from "@react-native-picker/picker";
// import { categoriesArray as categories } from "../../data";
// import useForm from "./useForm";

// const Form = (props: { item: CashItemProps["item"]; editing: boolean }) => {
//   const {
//     changeToOnline,
//     changeToCash,
//     paymentMode,
//     handleSubmit,
//     onAmountChange,
//     handleTimePickerConfirm,
//     showDatePicker,
//     showTimePicker,
//     onChangeRemark,
//     isTimePickerVisible,
//     isDatePickerVisible,
//     changeToCashOut,
//     changeToCashIn,
//     handleConfirm,
//     type,
//     date,
//     time,
//     errors,
//     remark,
//     hideDatePicker,
//     hideTimePicker,
//     amount,
//     category,
//     handlePickerChange,
//   } = useForm({ item: props.item });

//   return (
//     <View style={styles.main_container}>
//       <ScrollView style={{ paddingTop: props.editing ? "2%" : "10%" }}>
//         {props.editing && (
//           <Btns
//             type={type}
//             changeToCashIn={changeToCashIn}
//             changeToCashOut={changeToCashOut}
//           />
//         )}
//         <DateComponent
//           handleTimePickerConfirm={handleTimePickerConfirm}
//           hideDatePicker={hideDatePicker}
//           hideTimePicker={hideTimePicker}
//           date={date}
//           time={time}
//           showDatePicker={showDatePicker}
//           isDatePickerVisible={isDatePickerVisible}
//           isTimePickerVisible={isTimePickerVisible}
//           handleConfirm={handleConfirm}
//           showTimePicker={showTimePicker}
//         />
//         <View style={styles.input_container}>
//           <Input
//             label="Amount"
//             value={amount}
//             onChangeText={onAmountChange}
//             item={props.item}
//             error={errors.amount}
//             isAmount
//             keyboard
//           />

//           <Input
//             label="Remark"
//             onChangeText={onChangeRemark}
//             value={remark}
//             item={props.item}
//             error={errors.remark}
//           />
//         </View>
//         <View style={styles.category_container}>
//           <Text style={{ fontWeight: "bold" }}>Category:</Text>
//         </View>
//         <View
//           style={{
//             ...styles.picker_container,
//             borderColor: errors.category ? "red" : "#bdbdbd",
//           }}
//         >
//           <Picker
//             onValueChange={handlePickerChange}
//             mode={"dropdown"}
//             selectedValue={category}
//           >
//             {categories.map((el, index) => (
//               <Picker.Item label={el.title} value={el.value} key={index} />
//             ))}
//           </Picker>
//         </View>
//         <PaymentMode
//           paymentMode={paymentMode}
//           changeToCash={changeToCash}
//           changeToOnline={changeToOnline}
//         />
//       </ScrollView>
//       <TouchableOpacity
//         onPress={handleSubmit}
//         activeOpacity={0.8}
//         style={styles.btn_container}
//       >
//         <Text style={styles.btn_text}>
//           {!props.editing ? "SAVE" : "UPDATE"}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Form;

const styles = StyleSheet.create({
  main_container: { backgroundColor: "#fff", height: "100%" },

  btn_text: { fontWeight: "bold", color: "#fff", fontSize: 16 },

  input_container: {
    paddingVertical: "5%",
    width: "90%",
    alignSelf: "center",
    marginBottom: "5%",
  },
  btn_container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 7,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "4%",
    marginVertical: "5%",
  },
});
