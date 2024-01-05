import { FC, HTMLAttributes, PropsWithChildren } from "react";
import * as YUP from "yup";
import Form, { ISubmitHandler } from "@common/Form";
import Input from "@common/Input";
import FieldSet from "@common/FieldSet";
import Button, { ButtonTypes } from "@common/Button";
import AxiosLogIn from "@libs/axios/LogIn";
interface LogInProps extends HTMLAttributes<HTMLDivElement> {}
type LogInComponents = FC<LogInProps> & PropsWithChildren;
const LogIn: LogInComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <Form
        initialSchemas={yupSchemas}
        submitHandler={handlerSignIn}
        initialNameValue={getInitvalue()}
      >
        <FieldSet legend="sign Up">
          <Input label="email" />
          <Input label="password" />
          <Button ButtonType={ButtonTypes.PrimaryButton}>Submit</Button>
        </FieldSet>
      </Form>
    </div>
  );
};

export default LogIn;

const yupSchemas = YUP.object({
  email: YUP.string().required("insert teh email"),
  password: YUP.string().required("insert teh password"),
});

function getInitvalue() {
  let initValue = {
    email: "",
    password: "",
  };
  let localEmail = localStorage.getItem("email");
  if (localEmail) {
    initValue.email = localEmail;
  }
  let localPassword = localStorage.getItem("password");
  if (localPassword) {
    initValue.password = localPassword;
  }
  return initValue;
}

const handlerSignIn: ISubmitHandler = async (values, action) => {
  const data = JSON.stringify(values);
  const response = await AxiosLogIn(data);
  localStorage.setItem("token", response.data.token);
  action.setSubmitting(false);
};
