import React from "react";
const CartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: () => {},
});

export default CartContext;
