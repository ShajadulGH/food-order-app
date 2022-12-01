import { Fragment } from "react";
import FoodSummary from "./FoodSummary";
import FoodList from "./FoodList";
const Foods = () => {
  return (
    <Fragment>
      <FoodSummary></FoodSummary>
      <FoodList></FoodList>
    </Fragment>
  );
};
export default Foods;
