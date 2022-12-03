import React, { useContext } from "react";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import List from "./List";
const Cart = (props) => {
  const ctxCart = useContext(CartContext);
  const cartLength = ctxCart.items.length < 1;
  const cartView = (
    <ul className={styles.cartItems}>
      {ctxCart.items.map((item) => (
        <List
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
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
          {!cartLength && <button className={styles.order}>Order</button>}
        </div>
      </Card>
    </Modal>
  );
};
export default Cart;
