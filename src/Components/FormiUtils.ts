import * as Yup from "yup";

const AssignmentInitialValue = {
  fullName: "",
  email: "",
  dateOfBirth: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  username: "",
  password: "",
};

const AssignmentValidateSchema = Yup.object({
  fullName: Yup.string().max(15, "Must be Upper Case").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  dateOfBirth: Yup.number().required("Required"),
  streetAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "Invalid zip code")
    .required("Required"),
  username: Yup.string().max(8, "Must be Upper Case").required("Required"),
  password: Yup.string()
    .min(6, "Must be Upper Case and number")
    .required("Required"),
});

export { AssignmentInitialValue, AssignmentValidateSchema };
