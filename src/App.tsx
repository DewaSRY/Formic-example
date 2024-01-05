import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import SignUp from "@pages/SignUp";
import LogIn from "@pages/logIn";
import Home from "@pages/Home";
import CategoryList, { loader as CategoryLoader } from "@pages/Category";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route loader={CategoryLoader} path="/category">
        <Route index element={<CategoryList />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
