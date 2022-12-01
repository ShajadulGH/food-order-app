import styles from "./Image.module.css";
import FoodImage from "../../Assets/food1.jpg";
const Image = () => {
  return (
    <div className={styles.image}>
      <img src={FoodImage} alt="Foods of Pizza and Burger" />
    </div>
  );
};
export default Image;
