import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartIteams = {
  totalAmount: 0,
  carts: [],
};
const processCartItems = (state, action) => {
  if (action.type === "CART_ITEMS") {
    let storingItem;
    const storingAmount =
      state.totalAmount + action.items.amount * action.items.price;
    const existCartItemIndex = state.carts.findIndex(
      (item) => item.id === action.items.id
    );
    const existCartItem = state.carts[existCartItemIndex];
    if (existCartItem) {
      const newCartItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.items.amount,
      };
      storingItem = [...state.carts];
      storingItem[existCartItemIndex] = newCartItem;
    } else {
      storingItem = state.carts.concat(action.items);
    }
    return {
      totalAmount: storingAmount,
      carts: storingItem,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.carts.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.carts[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.carts.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.carts];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      carts: updatedItems,
      totalAmount: updatedTotalAmount,
    };
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
    dispatchCartItems({ type: "REMOVE", id: id });
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
