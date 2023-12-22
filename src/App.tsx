import { useState, Fragment } from "react";

import "./App.css";

import FormicOne from "./Components/FormicOne";
import FormicTwo from "./Components/FormicTwo";
function App() {
  const [currentPage, setNextPge] = useState<number>(0);

  function handleNextPage() {
    // this is method to prevent the unExpected value while set new one , on this case we done wot the value more then one
    setNextPge((prevVAlue) => {
      if (prevVAlue === 1) return 1;
      return prevVAlue + 1;
    });
  }
  function handlePrevPage() {
    // this is method to prevent the unExpected value while set new one , on this case we done wot the value more then lest then 0
    setNextPge((prevVAlue) => {
      if (prevVAlue === 0) return 0;
      return prevVAlue - 1;
    });
  }

  return (
    <Fragment>
      <div>
        <button
          className="p2-2 px-4 border-2 rounded-sm w-[10rem] m-4 bg-blue-500"
          onClick={handlePrevPage}
        >
          Formic one{" "}
        </button>
        <button
          className="p2-2 px-4 border-2 rounded-sm w-[10rem] m-4 bg-blue-500"
          onClick={handleNextPage}
        >
          Formic two{" "}
        </button>
      </div>
      {/* this is conditional dendering */}
      {currentPage === 0 && <FormicOne />}
      {currentPage === 1 && <FormicTwo />}
    </Fragment>
  );
}

export default App;
