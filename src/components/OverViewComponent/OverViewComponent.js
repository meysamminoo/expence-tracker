import { useState } from "react";
import TranseActionForm from "../TranseActionForm/TranseActionForm";
import styles from "./OverViewComponent.module.css";

const OverViewComponent = ({ expence, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={styles.topSection}>
        <p>Balance : {income - expence}</p>
        <button
          className={`${styles.btn} ${isShow && styles.cancel}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TranseActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}

      <div className={styles.resultSection}>
        <div className={styles.expenceBox}>
          Expence
          <span className={styles.textRed}>{expence} $</span>
        </div>
        <div className={styles.expenceBox}>
          Income
          <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
