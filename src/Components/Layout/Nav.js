import Image from "./Image";
import { Fragment } from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>House of Burger</h2>
        <button>Cart</button>
      </header>
      <Image></Image>
    </Fragment>
  );
};
export default Nav;
