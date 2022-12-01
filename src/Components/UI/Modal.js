import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import classes from "./Modal.module.css";
const ModalPortal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.closeClick}>
      <Cart closeClick={props.closeClick} className={classes.modal}></Cart>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalPortal closeClick={props.closeClick} />,
        document.getElementById("root-modal")
      )}
    </Fragment>
  );
};
export default Modal;
