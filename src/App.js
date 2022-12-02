import Nav from "./Components/Layout/Nav";
import { Fragment } from "react";
import "./App.css";
import Foods from "./Components/Foods/Foods";
function App() {
  return (
    <Fragment>
      <Nav />
      <Foods />
    </Fragment>
  );
}
export default App;
