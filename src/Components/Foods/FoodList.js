import FoodListItems from "./FoodListItems";

import styles from "./FoodList.module.css";
import Card from "../UI/Card";
const DummyFoods = [
  {
    id: "f1",
    name: "Beef Burger",
    description: "Loaded with Beef!",
    price: 220,
  },
  {
    id: "f2",
    name: "Chicken Burger",
    description: "House of Burger Special!",
    price: 200,
  },
  {
    id: "f3",
    name: "Beef Cheese Burger",
    description: "American, raw, meaty",
    price: 280,
  },
  {
    id: "f4",
    name: "BBQ Burger",
    description: "Loaded Beef with BBQ Flavour",
    price: 320,
  },
];
const FoodList = () => {
  const foodList = DummyFoods.map((food) => (
    <FoodListItems
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
