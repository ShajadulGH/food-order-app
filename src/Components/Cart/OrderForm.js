import useValidity from "../Hooks/use-validity";
import styles from "./OrderForm.module.css";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
const OrderForm = (props) => {
  const crtCtx = useContext(CartContext);
  // Using custom Hook for First Name
  const {
    inputValue: nameInputValue,
    inputHandle: nameInputHandle,
    onLoseFocus: nameOnLoseFocus,
    reset: nameReset,
    isValidValue: nameIsValidValue,
    notValid: nameNotValid,
  } = useValidity((value) => value.trim() !== "");
  // Using custom Hook for phone
  const {
    inputValue: phoneInputValue,
    inputHandle: phoneInputHandle,
    onLoseFocus: phoneOnLoseFocus,
    reset: phoneReset,
    isValidValue: phoneIsValidValue,
    notValid: phoneNotValid,
  } = useValidity((value) => value.includes("01"));
  // Using custom Hook for address
  const {
    inputValue: addressInputValue,
    inputHandle: addressInputHandle,
    onLoseFocus: addressOnLoseFocus,
    reset: addressReset,
    isValidValue: addressIsValidValue,
    notValid: addressNotValid,
  } = useValidity((value) => value.trim() !== "");
  // form Validity check
  let formIsValid = false;
  if (nameIsValidValue && phoneIsValidValue && addressIsValidValue) {
    formIsValid = true;
  }
  // After submit form
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Summitted!!!");
    console.log(nameInputValue);
    console.log(phoneInputValue);
    console.log(addressInputValue);
    nameReset();
    addressReset();
    phoneReset();
  };
  // Change the css class for styles.title warning
  const classFName = nameNotValid
    ? `${styles.invalid} ${styles.title}`
    : styles.title;
  const classLName = phoneNotValid
    ? `${styles.invalid} ${styles.title}`
    : styles.title;
  const classaddress = addressNotValid
    ? `${styles.invalid} ${styles.title}`
    : styles.title;
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.info}>Informations for order</div>
      <div className={classFName}>
        <label htmlFor="name">Your Name</label>
        <input
          placeholder="Enter Your Name"
          onBlur={nameOnLoseFocus}
          onChange={nameInputHandle}
          type="text"
          id="name"
          value={nameInputValue}
        />
        {nameNotValid && <p className={styles.p}>Name is not valid*</p>}
      </div>
      <div className={classLName}>
        <label htmlFor="name">Phone</label>
        <input
          placeholder="01*********"
          value={phoneInputValue}
          onChange={phoneInputHandle}
          onBlur={phoneOnLoseFocus}
          type="text"
          id="name"
        />
        {phoneNotValid && <p className={styles.p}>Number is not valid*</p>}
      </div>
      <div className={classaddress}>
        <label htmlFor="name">Address</label>
        <input
          placeholder="House/Road/City"
          value={addressInputValue}
          onChange={addressInputHandle}
          onBlur={addressOnLoseFocus}
          type="text"
          id="name"
        />
        {addressNotValid && <p className={styles.p}>Address is not valid*</p>}
      </div>
      <div className={styles.amount}>
        <span>Total Amount</span>
        <span>৳{crtCtx.amount}</span>
      </div>

      <div className={styles.action}>
        <button onClick={props.onClick}>Close</button>
        <button disabled={!formIsValid} className={styles.order}>
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
