import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [itemAmount, setItemamount] = useState(0);
  const addIteamHandler = (item) => {
    setItemamount(item.amount + itemAmount);
  };
  const cartAmount = {
    amount: itemAmount,
    addItem: addIteamHandler,
  };

  return (
    <CartContext.Provider value={cartAmount}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
