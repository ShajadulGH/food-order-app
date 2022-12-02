import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartIteams = {
  totalAmount: 0,
  carts: [],
};
const processCartItems = (state, action) => {
  if (action.type === "CART_ITEMS") {
    const storingIteam = state.carts.concat(action.items);
    const storingAmount =
      state.totalAmount + action.items.amount * action.items.price;
    return {
      totalAmount: storingAmount,
      carts: storingIteam,
    };
  }
  return defaultCartIteams;
};
const CartProvider = (props) => {
  const [cartItems, dispatchCartIteams] = useReducer(
    processCartItems,
    defaultCartIteams
  );
  const addIteamHandler = (item) => {
    dispatchCartIteams({ type: "CART_ITEMS", items: item });
  };
  const cartAmount = {
    items: cartItems.carts,
    amount: cartItems.totalAmount,
    addItem: addIteamHandler,
  };
  return (
    <CartContext.Provider value={cartAmount}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
