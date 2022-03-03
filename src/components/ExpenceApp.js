import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenceApp = () => {
  const [expence, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    if (formValues.amount === 0 || formValues.amount === "") {
      setTransaction([...transaction]);
    } else if (formValues.desc === "") {
      formValues.type === "expence"
        ? (formValues.desc = "expence")
        : (formValues.desc = "income");
      setTransaction([...transaction, { ...formValues, id: Date.now() }]);
    } else {
      setTransaction([...transaction, { ...formValues, id: Date.now() }]);
    }
    console.log(transaction);
  };

  const resetHandler = () => {
    if (transaction.length !== 0) {
      setTransaction([]);
    }
  };

  const deleteTransactionHandler = (id) => {
    const newTransactions = [...transaction];
    const deleteTransaction = newTransactions.filter((t) => t.id !== id);
    setTransaction(deleteTransaction);
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
      <TransActionComponent
        transaction={transaction}
        onDelete={deleteTransactionHandler}
      />
      <button className="btn reset" onClick={resetHandler}>
        Reset All Transaction
      </button>
    </section>
  );
};

export default ExpenceApp;
