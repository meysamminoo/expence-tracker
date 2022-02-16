import { useState } from "react";
import TransActionComponent from "./TransActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  return (
    <section className="container">
      <div className="topSection">
        <p>Balance - {income - expence}</p>
        <button>Add</button>
      </div>

      <div className="resultSection">
        <p>Expence {expence}</p>
        <p>Income {income}</p>
      </div>
      <TransActionComponent transAction={transAction} />
    </section>
  );
};

export default ExpenceApp;
