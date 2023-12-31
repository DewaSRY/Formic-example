import { FC, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";
import NavLink from "@common/NavLink";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <nav
        className={
          "w-full h-[2re] max-w-[30rem] static top-0 m-auto px-8 py-4 " +
          "bg-green-300 border-b-2 rounded-full"
        }
      >
        <ul
          className={"flex gap-4" + " text-2xl underline font-bold text-white"}
        >
          <NavLink to="/" label="Home" />
          <NavLink to="/sign-up" label="Sign Up" />
          <NavLink to="/log-in" label="Log In" />
          <NavLink to="/category" label="category" />
        </ul>
      </nav>
      <main className="px-4 py-16">
        <Outlet />
      </main>
    </div>
  );
};

export default index;
