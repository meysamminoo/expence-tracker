import { useState } from "react";
import TranseActionForm from "./TranseActionForm";

const OverViewComponent = ({ expence, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expence}</p>
        <button
          className={`btn ${isShow && "cancel"}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TranseActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}

      <div className="resultSection">
        <div className="expenceBox">
          Expence
          <span className="textRed">{expence} $</span>
        </div>
        <div className="expenceBox">
          Income
          <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
