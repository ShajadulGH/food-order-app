import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartIteams = {
  totalAmount: 0,
  carts: [],
};
const processCartItems = (state, action) => {
  let storingItem;

  if (action.type === "CART_ITEMS") {
    const storingAmount =
      state.totalAmount + action.items.amount * action.items.price;
    const existCartItemIndex = state.carts.findIndex(
      (item) => item.id === action.items.id
    );
    console.log("Index" + existCartItemIndex);
    const existCartItem = state.carts[existCartItemIndex];
    if (existCartItem) {
      console.log("if working");

      const newCartItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.items.amount,
      };
      console.log(newCartItem);

      storingItem = [...state.carts];
      storingItem[existCartItemIndex] = newCartItem;
    } else {
      console.log("Working");
      storingItem = state.carts.concat(action.items);
    }
    return {
      totalAmount: storingAmount,
      carts: storingItem,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    console.log("Remove Item");

    // const existCartItemIndex = state.carts.findIndex(
    //   (item) => item.id === action.items.id
    // );
    // console.log("Index" + existCartItemIndex);
    // const existCartItem = state.carts[existCartItemIndex];
    // if (existCartItem) {
    //   console.log("if working");
    //   const newCartItem = {
    //     ...existCartItem,
    //     amount: existCartItem.amount - action.items.amount,
    //   };
    //   console.log(newCartItem);
    //   storingItem = [...state.carts];
    //   storingItem[existCartItemIndex] = newCartItem;
    // }
  }
  return defaultCartIteams;
};
const CartProvider = (props) => {
  const [cartItems, dispatchCartItems] = useReducer(
    processCartItems,
    defaultCartIteams
  );
  const addIteamHandler = (item) => {
    dispatchCartItems({ type: "CART_ITEMS", items: item });
  };
  const removeItemHandler = (id) => {
    console.log(id);
  };
  const cartAmount = {
    items: cartItems.carts,
    amount: cartItems.totalAmount,
    addItem: addIteamHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartAmount}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
