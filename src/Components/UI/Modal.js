import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModalPortal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalPortal>{props.children}</ModalPortal>,
        document.getElementById("root-modal")
      )}
    </Fragment>
  );
};
export default Modal;
