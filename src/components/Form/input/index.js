import React from "react";
import styles from "./style.module.scss";

class Input extends React.Component {

  
  onChangeHandler = (event) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <input
        {...this.props}
        className={styles.input}
        onChange={this.onChangeHandler}
      />
    );
  }
}

export default Input;
