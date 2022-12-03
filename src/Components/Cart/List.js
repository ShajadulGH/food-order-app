import styles from "./List.module.css";
const List = (props) => {
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
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};
export default List;
