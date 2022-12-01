import Image from "./Image";
import { Fragment, useState } from "react";
import styles from "./Nav.module.css";
import CardButton from "./CartButton";
import Modal from "../UI/Modal";
const Nav = () => {
  const [isclicked, setIsClicked] = useState(false);
  const onclickHandler = () => {
    setIsClicked(true);
  };
  const closeClicked = () => {
    setIsClicked(false);
  };
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>House of Burger</h2>
        <CardButton onClick={onclickHandler}></CardButton>
      </header>
      <Image></Image>
      {isclicked && <Modal closeClick={closeClicked} />}
    </Fragment>
  );
};
export default Nav;
