import { useEffect, useState } from "react";
import FoodListItems from "./FoodListItems";
import styles from "./FoodList.module.css";
import Card from "../UI/Card";
const FoodList = () => {
  const [allFoods, setAllFoods] = useState([]);
  const fetchFoods = async () => {
    const response = await fetch(
      "https://food-order-app-7eb2e-default-rtdb.firebaseio.com/foods.json"
    );
    const data = await response.json();

    let loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setAllFoods(loadedData);
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  const foodList = allFoods.map((food) => (
    <FoodListItems
      id={food.id}
      key={food.id}
      name={food.name}
      details={food.description}
      price={food.price}
    ></FoodListItems>
  ));
  return (
    <section className={styles.foods}>
      <Card>
        <ul>{foodList}</ul>
      </Card>
    </section>
  );
};
export default FoodList;
