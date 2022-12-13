import React from "react";
const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default CartContext;
