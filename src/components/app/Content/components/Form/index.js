import React from "react";
import styles from "./style.module.scss";
import Input from "components/Form/input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
  }
  handleColor = (event) => {
    this.setState({ color: event.target.value });
  };
  render() {
    return (
      <form className={styles.form}>
        <Input onChange={this.handleColor} />
        <div
          style={{ background: this.state.color }}
          className={styles.box}
        ></div>
      </form>
    );
  }
}

export default Form;
