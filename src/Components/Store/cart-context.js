import React from "react";
const CartContext = React.createContext({
  amount: 0,
  addItem: () => {},
});

export default CartContext;
