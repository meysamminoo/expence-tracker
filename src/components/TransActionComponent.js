import { useEffect, useState } from "react";

const TransActionComponent = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const [filterTransaction, setFilterTransaction] = useState(props.transaction);

  const filteredTrasaction = (search) => {
    if (!search || search === "") {
      setFilterTransaction(props.transaction);
      return;
    }
    const filtered = props.transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterTransaction(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTrasaction(e.target.value);
  };

  useEffect(() => {
    filteredTrasaction(searchItem);
  }, [props.transaction]);

  if (!props.transaction.length)
    return <h3 className="title">Add some transactions</h3>;

  return (
    <section>
      <input
        className="search"
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for transactions"
      />
      {filterTransaction.length
        ? filterTransaction.map((t) => {
            return (
              <div
                className="transaction"
                style={{ borderRight: t.type === "expence" && "5px solid red" }}
                key={t.id}
              >
                <span>{t.desc}</span>
                <span>$ {t.amount}</span>
                <button className="delete" onClick={() => props.onDelete(t.id)}>
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
