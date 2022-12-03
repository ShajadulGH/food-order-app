import React, { useContext } from "react";
import CartContext from "../Store/cart-context";
import styles from "./List.module.css";
const List = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemHandler = () => {
    cartCtx.addItem({
      id: props.id,
      amount: 1,
      name: props.name,
      price: props.price,
      description: props.description,
    });
  };
  const rmvCartItemHandler = () => {
    cartCtx.removeItem(props.id);
  };
  return (
    <li className={styles.list}>
      <div>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price_amount}>
          <p className={styles.price}>৳{props.price}</p>
          <p>{props.amount}x</p>
        </div>
      </div>

      <div className={styles.button}>
        <button onClick={cartItemHandler}>+</button>
        <button onClick={rmvCartItemHandler}>-</button>
      </div>
    </li>
  );
};
export default List;
