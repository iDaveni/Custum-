import React from "react";
import styles from "./style.module.scss";

class Input extends React.Component {
  
  render() {
    return (
      <input
        className={styles.input} 
        onChange={this.props.onChange}
        {...this.props}
      />
    );
  }
}

export default Input;