import styles from "./FoodSummary.module.css";
const FoodSummary = () => {
  return (
    <section className={styles.summary}>
      <h3>We Are Ready To Serve You</h3>
      {/* <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p> */}
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default FoodSummary;
