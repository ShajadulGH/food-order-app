import React, { useRef, useState } from "react";
import styles from "./Form.module.css";
import Input from "../UI/Input";
const Form = (props) => {
  const takingAmount = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const addItemHandler = (event) => {
    event.preventDefault();
    const stringAmount = takingAmount.current.value;
    const numberAmount = +stringAmount;
    if (
      stringAmount.trim().length === 0 ||
      numberAmount < 1 ||
      numberAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.numOfitem(numberAmount);
  };
  return (
    <form className={styles.form}>
      <Input
        ref={takingAmount}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button onClick={addItemHandler}>+ Add</button>
      {/* {!amountIsValid && <p>Please enter a valid amount!</p>} */}
    </form>
  );
};
export default Form;
