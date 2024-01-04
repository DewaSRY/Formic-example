import { useField } from "formik";
import { FC, Fragment, InputHTMLAttributes } from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input: FC<Input> = ({ label, ...props }) => {
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

export default Input;
