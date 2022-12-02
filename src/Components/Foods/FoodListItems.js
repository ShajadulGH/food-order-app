import React, { useContext } from "react";
import styles from "./FoodListItems.module.css";
import Form from "./Form";
import CartContext from "../Store/cart-context";

const FoodListItems = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemHandler = (num) => {
    cartCtx.addItem({
      amount: num,
      name: props.name,
      price: props.price,
      description: props.description,
    });
  };
  return (
    <li className={styles.list}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.details}</div>
        <div className={styles.price}>৳ {props.price.toFixed(2)}</div>
      </div>

      <div>
        <Form numOfitem={cartItemHandler}></Form>
      </div>
    </li>
  );
};
export default FoodListItems;
