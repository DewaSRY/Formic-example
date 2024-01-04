import Form, { ISubmitHandler } from "@common/Form";
import Input from "@common/Input";

import * as YUP from "yup";

const initialSchemas = YUP.object({
  name: YUP.string().required("please insert teh name"),
  email: YUP.string().required("please insert teh name"),
});
const sumbitHandler: ISubmitHandler = (value, action) => {
  alert(JSON.stringify(value, null, 2));
  action.resetForm();
};

const initialValua = {
  name: "",
  email: "",
};

function App() {
  return (
    <>
      <Form
        initialNameValue={initialValua}
        submitHandler={sumbitHandler}
        initialSchemas={initialSchemas}
      >
        <Input label={"name"} />
        <Input label={"email"} />
        <button
          className="border-2 bg-green-700 text-2xl text-white"
          type="submit"
        >
          submit
        </button>
      </Form>
    </>
  );
}

export default App;
