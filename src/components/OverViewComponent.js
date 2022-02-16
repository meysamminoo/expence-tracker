import { useState } from "react";
import TranseActionForm from "./TranseActionForm";

const OverViewComponent = ({ expence, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance - {income - expence}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TranseActionForm addTransaction={addTransaction} />}

      <div className="resultSection">
        <p>Expence {expence}</p>
        <p>Income {income}</p>
      </div>
    </>
  );
};

export default OverViewComponent;
