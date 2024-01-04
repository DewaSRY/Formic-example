import { FC, FieldsetHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Form, FormikProps, Formik, FormikHelpers } from "formik";
import { AssignmentInitialValue, AssignmentValidateSchema } from "./FormiUtils";
import { MyTextField } from "./FormicTwo";

interface ISubmitHandler {
  (
    value: typeof AssignmentInitialValue,
    action: FormikHelpers<typeof AssignmentInitialValue>
  ): void;
}

export const SubmitHandler: ISubmitHandler = (value, action) => {
  action.resetForm();
  setTimeout(() => {
    alert(JSON.stringify(value, null, 2));
  }, 5000);
};
interface AssignmentFormic extends HTMLAttributes<HTMLDivElement> {}
const AssignmentFormic: FC<AssignmentFormic> = ({}) => {
  return (
    <>
      <Formik
        initialValues={AssignmentInitialValue}
        validationSchema={AssignmentValidateSchema}
        onSubmit={SubmitHandler}
      >
        {(props: FormikProps<typeof AssignmentInitialValue>) => (
          <Form>
            <FieldsetComponent isHided={}></FieldsetComponent>
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
    </>
  );
};

export default AssignmentFormic;

interface FieldsetComponent
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  children: ReactNode;
  isHided: boolean;
}
const FieldsetComponent: FC<FieldsetComponent> = ({
  legend,
  children,
  isHided,
  ...rest
}) => {
  return (
    <fieldset
      {...rest}
      className={`${isHided ? "scale-x-0 h-0" : "transition-all origin-right"}`}
    >
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};
