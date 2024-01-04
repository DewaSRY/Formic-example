import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import { Form, FormikProps, Formik, FormikHelpers } from "formik";
import type { ObjectSchema } from "yup";
type InitialValue = Record<string, string>;
export interface ISubmitHandler {
  (value: InitialValue, action: FormikHelpers<InitialValue>): void;
}
interface FormicTwo extends HTMLAttributes<HTMLDivElement> {
  initialNameValue: InitialValue;
  initialSchemas: ObjectSchema<InitialValue>;
  submitHandler: ISubmitHandler;
}
type FormComponent = FC<FormicTwo> & PropsWithChildren;
const FormicTwo: FormComponent = ({
  children,
  initialNameValue,
  initialSchemas,
  submitHandler,
}) => {
  return (
    <div>
      <h1>My Form</h1>
      {/* this 'Formik' is formic context where formic store teh value */}
      <Formik
        initialValues={initialNameValue}
        validationSchema={initialSchemas}
        onSubmit={submitHandler}
      >
        {(_props: FormikProps<InitialValue>) => (
          <Fragment>
            <Form>{children}</Form>
          </Fragment>
        )}
      </Formik>
    </div>
  );
};

export default FormicTwo;
