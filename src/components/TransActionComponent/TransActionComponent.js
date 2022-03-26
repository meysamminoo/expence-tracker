import { useEffect, useState } from "react";
import styles from "./TransActionComponent.module.css";

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
    return <h3 className={styles.title}>Add some transactions</h3>;

  return (
    <section className={styles.transactionBox}>
      <div className={styles.filter}>
        <input
          className={styles.search}
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
                className={styles.transactionInner}
                key={t.id}
                style={{
                  borderRight: t.type === "expence" && "5px solid red",
                }}
              >
                <div className={styles.transaction}>
                  <span className={styles.desc}>{t.desc}</span>
                  <span>$ {t.amount}</span>
                  <span>{t.category}</span>
                  <button
                    className={styles.delete}
                    onClick={() => onDelete(t.id)}
                  >
                    Delete
                  </button>
                </div>
                <span className={styles.date}>{t.date}</span>
              </div>
            );
          })
        : "No item matchs !"}
    </section>
  );
};

export default TransActionComponent;
