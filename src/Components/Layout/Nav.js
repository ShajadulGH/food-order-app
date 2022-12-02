import Image from "./Image";
import { Fragment } from "react";
import styles from "./Nav.module.css";
import CardButton from "./CartButton";
import Cart from "../Cart/Cart";
const Nav = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>House of Burger</h2>
        <CardButton></CardButton>
      </header>
      <Image></Image>
      <Cart />
    </Fragment>
  );
};
export default Nav;
