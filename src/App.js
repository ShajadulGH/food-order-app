import Nav from "./Components/Layout/Nav";
import { Fragment } from "react";
import "./App.css";
import Foods from "./Components/Foods/Foods";
// import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Nav></Nav>
      <Foods></Foods>
      {/* <Cart></Cart> */}
    </Fragment>
  );
}
export default App;
