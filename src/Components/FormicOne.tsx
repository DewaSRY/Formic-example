import { FC, HTMLAttributes } from "react";

import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";

/**
 * Use as default value of every forms , the name of every fields should be same so value can identify
 */
export const InitialNameValue = {
  firstName: "",
  lastName: "",
  email: "",
};
export const YupSchema = Yup.object({
  firstName: Yup.string()
    .min(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

/**
 * Interface of submit handler, use as source of Information of value on formic and another callback function on formic
 */
interface ISubmitHandler {
  (
    value: typeof InitialNameValue,
    action: FormikHelpers<typeof InitialNameValue>
  ): void;
}

export const SubmitHandler: ISubmitHandler = (value, action) => {
  action.resetForm();
  setTimeout(() => {
    alert(JSON.stringify(value, null, 2));
  }, 5000);
};
interface FormicOne extends HTMLAttributes<HTMLDivElement> {}
const FormicOne: FC<FormicOne> = ({}) => {
  const formik = useFormik({
    initialValues: InitialNameValue,
    validationSchema: YupSchema,
    onSubmit: SubmitHandler,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-11/12 lg:w-[48rem] m-auto flex flex-col justify-start my-6"
    >
      <label
        htmlFor="firstName"
        className="flex flex-col text-left  gap-1 my-3"
      >
        First Name
        <input
          className="border-b-2 outline-none"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {/* This is some error callback from formic return from yap , just need to access the error from the formic and access teh name fields */}
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="text-red-400">{formik.errors.firstName}</p>
        ) : null}
      </label>

      <label className="flex flex-col text-left  gap-1 my-3" htmlFor="lastName">
        Last Name
        <input
          className="border-b-2 outline-none"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange} // onChange and and value use to always  update the formic value object
          value={formik.values.lastName}
          onBlur={formik.handleBlur} //  onBlur use to tigre the error masage if there is error masage
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="text-red-400">{formik.errors.lastName}</p>
        ) : null}
      </label>

      <label className="flex flex-col text-left  gap-1 my-3" htmlFor="email">
        Email Address
        <input
          className="border-b-2 outline-none"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-400">{formik.errors.email}</p>
        ) : null}
      </label>

      {/* button with type submit will trigre the submit button  */}
      <button className="p2-2 px-4 border-2 rounded-sm" type="submit">
        Submit
      </button>
      {/* this button is not triger submit */}
      <button
        className="p2-2 px-4 border-2 rounded-sm"
        type="button"
        onClick={() => {
          alert("this button does't trigger the submit");
        }}
      >
        another button
      </button>
    </form>
  );
};

export default FormicOne;
