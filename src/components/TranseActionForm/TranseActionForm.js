import { useState } from "react";
import styles from "./TranseActionForm.module.css";

const TranseActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expence",
    amount: 0,
    category: "Other",
    desc: "",
    date: new Date().toString(),
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
        placeholder="Amount"
      />

      <select
        name="category"
        value={formValues.category}
        onChange={changeHandler}
        placeholder="category"
      >
        <option>Other</option>
        <option>Income</option>
        <option>Hire</option>
        <option>Installment</option>
        <option>Comestible</option>
        <option>Garment</option>
      </select>

      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
        placeholder="description"
      />

      <div className={styles.radioBox}>
        <input
          type="radio"
          value="expence"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expence"}
          id="expence"
        />
        <label htmlFor="expence">Expence</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>

      <button className={`${styles.btn} ${styles.primary}`} type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TranseActionForm;
