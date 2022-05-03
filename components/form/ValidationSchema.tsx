import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("name is required").label("name"),
  packaging: Yup.string()
    .trim()
    .required("Packaging is required")
    .label("packaging"),
  buyingPrice: Yup.number()
    .required()
    .min(1, "add buying price")
    .label("buyingPrice"),
  stock: Yup.number().required().min(1, "add stock").label("stock"),
  category: Yup.string().trim().required("choose category").label("category"),
  description: Yup.string()
    .trim()
    .required("description is required")
    .label("description"),
});

export default validationSchema;
