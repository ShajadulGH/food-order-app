import Nav from "./Components/Layout/Nav";
import { Fragment } from "react";
import "./App.css";
import Foods from "./Components/Foods/Foods";
function App() {
  return (
    <Fragment>
      <Nav></Nav>
      <Foods></Foods>
    </Fragment>
  );
}
export default App;
