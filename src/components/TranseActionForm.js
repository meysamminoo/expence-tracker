import { useState } from "react";

const TranseActionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  return (
    <form>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div onChange={(e) => setType(e.target.value)}>
        <input type="radio" value="expence" name={type} />
        <label>Expence</label>
        <input type="radio" value="income" name={type} />
        <label>Income</label>
      </div>
      <button onClick={addTransaction}>Add Transaction</button>
    </form>
  );
};

export default TranseActionForm;
