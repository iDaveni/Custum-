import React from "react";
import styles from "./style.module.scss";

class ShoutComponentExampple extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  onClickHandler = () => {
    this.setState({
      count: 10,
    });
  };


  render() {
    console.log("render");
    return (
      <div className={styles.div}>
        <span className={styles.span}>Click Count: {this.state.count}</span>
        <button className={styles.btn} onClick={this.onClickHandler}>
          {" "}
          Click
        </button>
      </div>
    );
  }
}
export default ShoutComponentExampple;
