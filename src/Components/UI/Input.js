import styles from "./Input.module.css";
import React, { forwardRef } from "react";
const Input = (props, ref) => {
  return (
    <div className={styles.input}>
      <div>
        <label htmlFor={props.input.id}>{props.label}</label>
      </div>
      <div>
        <input ref={ref} {...props.input}></input>
      </div>
    </div>
  );
};
export default forwardRef(Input);
