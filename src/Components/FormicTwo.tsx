import { FC, Fragment, HTMLAttributes, InputHTMLAttributes } from "react";
import { useField, Form, FormikProps, Formik } from "formik";

import { SubmitHandler, InitialNameValue, YupSchema } from "./FormicOne";
interface FormicTwo extends HTMLAttributes<HTMLDivElement> {}
const FormicTwo: FC<FormicTwo> = ({}) => {
  return (
    <div>
      <h1>My Form</h1>
      {/* this 'Formik' is formic context where formic store teh value */}
      <Formik
        initialValues={InitialNameValue}
        validationSchema={YupSchema}
        onSubmit={SubmitHandler}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <MyTextField name="firstName" type="text" label="First Name" />
            <MyTextField name="lastName" type="text" label="Last Name" />
            <MyTextField name="email" type="email" label="Email" />
            <button
              className="p2-2 px-4 border-2 rounded-sm mx-4"
              type="submit"
            >
              Submit
            </button>
            <button
              className="p2-2 px-4 border-2 rounded-sm mx-4"
              onClick={() => {
                console.log(props);
              }}
              type="button"
            >
              Click this to see the value of formic object one concole inspector
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface MyTextField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const MyTextField: FC<MyTextField> = ({ label, ...props }) => {
  /**
   * the parameter pass on teh 'useField' is identifier  of every instance of input filed also need have same name with the YUP validation and initila value,
   * this hooks use to get another necesery propery from query data from input to formic context
   */
  const [field, meta] = useField(label);
  return (
    <Fragment>
      <label className="flex flex-col text-left  gap-1 my-3">
        {label}
        <input className="border-b-2 outline-none" {...field} {...props} />
        {meta.touched && meta.error ? (
          <p className="text-red-400">{meta.error}</p>
        ) : null}
      </label>
    </Fragment>
  );
};

export default FormicTwo;
