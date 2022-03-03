import { useEffect, useState } from "react";

const TransActionComponent = ({ transaction, onDelete }) => {
  const [searchItem, setSearchItem] = useState("");
  const [selectItem, setSelectItem] = useState("");
  const [filterTransaction, setFilterTransaction] = useState(transaction);

  const filterCategory = (cat) => {
    switch (cat) {
      case "All":
        return setFilterTransaction(transaction);
      case "Other": {
        const filtered = transaction.filter((t) => t.category === "Other");
        return setFilterTransaction(filtered);
      }
      case "Income": {
        const filtered = transaction.filter((t) => t.category === "Income");
        return setFilterTransaction(filtered);
      }
      case "Hire": {
        const filtered = transaction.filter((t) => t.category === "Hire");
        return setFilterTransaction(filtered);
      }
      case "Installment": {
        const filtered = transaction.filter(
          (t) => t.category === "Installment"
        );
        return setFilterTransaction(filtered);
      }
      case "Comestible": {
        const filtered = transaction.filter((t) => t.category === "Comestible");
        return setFilterTransaction(filtered);
      }
      case "Garment": {
        const filtered = transaction.filter((t) => t.category === "Garment");
        return setFilterTransaction(filtered);
      }
      default:
        return setFilterTransaction(transaction);
    }
  };

  const filteredTrasaction = (search) => {
    if (!search || search === "") {
      setFilterTransaction(transaction);
      filterCategory(selectItem);
      return;
    }
    const filtered = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    // filterCategory(selectItem);
    setFilterTransaction(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTrasaction(e.target.value);
  };

  const categoryHandler = (e) => {
    setSelectItem(e.target.value);
    filterCategory(e.target.value);
  };

  useEffect(() => {
    filteredTrasaction(searchItem);
  }, [transaction]);

  if (!transaction.length)
    return <h3 className="title">Add some transactions</h3>;

  return (
    <section className="transactionBox">
      <div className="filter">
        <input
          className="search"
          type="text"
          value={searchItem}
          onChange={changeHandler}
          placeholder="search for transactions"
        />

        <select
          name="category"
          value={selectItem}
          onChange={categoryHandler}
          placeholder="category"
        >
          <option>All</option>
          <option>Other</option>
          <option>Income</option>
          <option>Hire</option>
          <option>Installment</option>
          <option>Comestible</option>
          <option>Garment</option>
        </select>
      </div>

      {filterTransaction.length
        ? filterTransaction.map((t) => {
            return (
              <div
                className="transaction"
                style={{ borderRight: t.type === "expence" && "5px solid red" }}
                key={t.id}
              >
                <span className="desc">{t.desc}</span>
                <span>$ {t.amount}</span>
                <span>{t.category}</span>
                <button className="delete" onClick={() => onDelete(t.id)}>
                  Delete
                </button>
              </div>
            );
          })
        : "No item matchs !"}
    </section>
  );
};

export default TransActionComponent;
