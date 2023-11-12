import * as yup from "yup";

export const adminSchma = yup.object().shape({
  password: yup.string().min(6).max(32).required("Password Is Required"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First Name is Required"),
      middleName: yup.string().required("Middle Name is Required"),
      lastName: yup.string().required("Last Name Is Required"),
    }),
    email: yup.string().email().required("Email Is Required"),
    designation: yup.string().required("Requried Designation"),
    dateOfBirth: yup.string().required("Date Of Birth Required"),
  }),
});
