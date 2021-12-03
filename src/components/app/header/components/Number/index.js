import React from "react";
import styles from "./style.module.scss";

class Number extends React.Component {
  render() {
    return (
      <div className={styles.number}>
        <span className={styles.num}>
          <a className={styles.span} href="tel:+375291055959">
            +375 29 305-59-59
          </a>
        </span>
        <span className={styles.num}>
          <a className={styles.span} href="tel:+375291055959">
            +375 29 305-59-59
          </a>
        </span>
      </div>
    );
  }
}

export default Number;
