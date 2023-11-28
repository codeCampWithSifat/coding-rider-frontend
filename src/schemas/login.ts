import * as yup from "yup";

export const loginSchema = yup.object().shape({
  id: yup.string().required("Id Is Required"),
  password: yup.string().min(6).max(32).required("Password Is Required"),
});
