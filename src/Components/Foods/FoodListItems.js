import styles from "./FoodListItems.module.css";
const FoodListItems = (props) => {
  return (
    <li className={styles.list}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.details}</div>
        <div className={styles.price}>৳ {props.price.toFixed(2)}</div>
      </div>

      <div></div>
    </li>
  );
};
export default FoodListItems;
