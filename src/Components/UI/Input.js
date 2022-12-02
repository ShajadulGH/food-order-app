import styles from "./Input.module.css";
import React, { forwardRef } from "react";
const Input = (props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
};
export default forwardRef(Input);
