import Nav from "./Components/Layout/Nav";
import { Fragment, useState } from "react";
import "./App.css";
import Foods from "./Components/Foods/Foods";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [modalShowHide, setModalShowHide] = useState(false);
  const modalShow = () => {
    setModalShowHide(true);
  };
  const modalHide = () => {
    setModalShowHide(false);
  };
  return (
    <Fragment>
      <CartProvider>
        {modalShowHide && <Cart onClick={modalHide} />}
        <Nav onClick={modalShow} />
        <Foods />
      </CartProvider>
    </Fragment>
  );
}
export default App;
