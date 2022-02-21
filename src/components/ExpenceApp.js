import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    setTransaction([...transaction, { ...formValues, id: Date.now() }]);
  };

  return (
    <section className="container">
      <OverViewComponent
        expence={expence}
        income={income}
        addTransaction={addTransaction}
      />
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpenceApp;
