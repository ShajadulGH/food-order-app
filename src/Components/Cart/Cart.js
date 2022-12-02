import Card from "../UI/Card";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartIteams = [
    {
      id: "f1",
      name: "Beef Burger",
      description: "Loaded with Beef!",
      price: 220,
    },
  ];
  const cartView = (
    <ul className={styles.cartItems}>
      {cartIteams.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      <Card>
        {cartView}
        <div className={styles.amount}>
          <span>Total Amount</span>
          <span>৳200.00</span>
        </div>
        <div className={styles.action}>
          <button onClick={props.closeClick}>Close</button>
          <button className={styles.order}>Order</button>
        </div>
      </Card>
    </Modal>
  );
};
export default Cart;
