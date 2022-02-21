import { useState } from "react";

const TranseActionForm = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({
    type: "expence",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        name="amount"
        value={formValues.amount}
        onChange={changeHandler}
      />

      <input
        type="text"
        name="desc"
        value={formValues.desc}
        onChange={changeHandler}
      />

      <div>
        <input
          type="radio"
          value="expence"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expence"}
        />
        <label>Expence</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
        <label>Income</label>
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TranseActionForm;
