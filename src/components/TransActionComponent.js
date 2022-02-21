const TransActionComponent = ({ transaction }) => {
  return (
    <section>
      {transaction.length &&
        transaction.map((t) => {
          return (
            <div
              className="transaction"
              style={{ borderRight: t.type === "expence" && "5px solid red" }}
              key={t.id}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          );
        })}
    </section>
  );
};

export default TransActionComponent;
