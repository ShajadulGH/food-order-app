import React, { useContext } from "react";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
const Cart = (props) => {
  const ctxCart = useContext(CartContext);
  const cartView = (
    <ul className={styles.cartItems}>
      {ctxCart.items.map((item) => (
        <li>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.price_amount}>
            <p className={styles.price}>৳{item.price}</p>
            <p>{item.amount}x</p>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClick}>
      <Card>
        {cartView}
        <div className={styles.amount}>
          <span>Total Amount</span>
          <span>৳{ctxCart.amount}</span>
        </div>
        <div className={styles.action}>
          <button onClick={props.onClick}>Close</button>
          <button className={styles.order}>Order</button>
        </div>
      </Card>
    </Modal>
  );
};
export default Cart;
