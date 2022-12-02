import Image from "./Image";
import { Fragment, useState } from "react";
import styles from "./Nav.module.css";
import CardButton from "./CartButton";
import Cart from "../Cart/Cart";
const Nav = () => {
  const [modalShowHide, setModalShowHide] = useState(false);
  const modalShow = () => {
    setModalShowHide(true);
  };
  const modalHide = () => {
    setModalShowHide(false);
  };
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>House of Burger</h2>
        <CardButton onClick={modalShow}></CardButton>
      </header>
      <Image></Image>
      {modalShowHide && <Cart onClick={modalHide} />}
    </Fragment>
  );
};
export default Nav;
