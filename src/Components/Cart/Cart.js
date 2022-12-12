import React, { Fragment, useContext, useState } from "react";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import List from "./List";
import OrderForm from "./OrderForm";
const Cart = (props) => {
  const ctxCart = useContext(CartContext);
  const cartLength = ctxCart.items.length < 1;
  const [goOrder, setGoOrder] = useState(false);
  // const [orderConfirmed, setOrderConfirmed] = useState(false);
  const orderHandler = () => {
    setGoOrder(true);
  };
  // const confirmOrderHandler = () => {
  //   setOrderConfirmed(true);
  //   console.log(orderConfirmed);
  // };
  const infoView = <OrderForm onClick={props.onClick} />;
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
  const cartViewTotal = (
    <Fragment>
      <div className={styles.amount}>
        <span>Total Amount</span>
        <span>৳{ctxCart.amount}</span>
      </div>

      <div className={styles.action}>
        <button onClick={props.onClick}>Close</button>
        {!cartLength && (
          <button onClick={orderHandler} className={styles.order}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );
  // const infoViewTotal = (
  //   <Fragment>
  //     <div className={styles.amount}>
  //       <span>Total Amount</span>
  //       <span>৳{ctxCart.amount}</span>
  //     </div>

  //     <div className={styles.action}>
  //       <button onClick={props.onClick}>Close</button>
  //       {!cartLength && (
  //         <button onClick={confirmOrderHandler} className={styles.order}>
  //           Confirm Order
  //         </button>
  //       )}
  //     </div>
  //   </Fragment>
  // );
  return (
    <Modal onClick={props.onClick}>
      <Card>
        {goOrder ? infoView : cartView}
        {goOrder ? "" : cartViewTotal}
      </Card>
    </Modal>
  );
};
export default Cart;
