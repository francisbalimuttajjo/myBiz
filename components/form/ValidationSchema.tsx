import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("name is required").label("name"),
  buyingPrice: Yup.number()
    .required()
    .min(1, "add buying price")
    .label("buyingPrice"),
  stock: Yup.number().required().min(1, "add stock").label("stock"),
  categories: Yup.string()
    .trim()
    .required("choose category")
    .label("categories"),
  description: Yup.string()
    .trim()
    .required("description is required")
    .label("description"),
});

export default validationSchema;
