import Image from "./Image";
import { Fragment } from "react";
import styles from "./Nav.module.css";
import CardButton from "./CartButton";
const Nav = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2 className={styles.h2}>House of Burger</h2>
        <CardButton onClick={props.onClick}></CardButton>
      </header>
      <Image></Image>
    </Fragment>
  );
};
export default Nav;
