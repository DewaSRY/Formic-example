import { FC, InputHTMLAttributes } from "react";
import { useField } from "formik";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
type InputComponent = FC<InputProps>;
export const Input: InputComponent = ({ label, ...resProps }) => {
  const [field, meta] = useField(label);
  return (
    <label className="flex flex-col text-left  gap-1 my-3">
      {label}
      <input
        {...resProps}
        className={
          "border-b-2 outline-none" +
          ` ${resProps.className ? resProps.className : ""} `
        }
        {...field}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-400">{meta.error}</p>
      ) : null}
    </label>
  );
};

export default Input;
