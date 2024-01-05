import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <h2>Halloo this is home</h2>
    </div>
  );
};

export default index;
