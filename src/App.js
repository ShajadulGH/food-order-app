import Nav from "./Components/Layout/Nav";
import { Fragment, useState } from "react";
import "./App.css";
import Foods from "./Components/Foods/Foods";
import Cart from "./Components/Cart/Cart";

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
      {modalShowHide && <Cart onClick={modalHide} />}
      <Nav onClick={modalShow} />
      <Foods />
    </Fragment>
  );
}
export default App;
