import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    setTransaction([...transaction, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((t) => {
      t.type === "expence"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseInt(t.amount));
    });
    setExpence(exp);
    setIncome(inc);
  }, [transaction]);

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
