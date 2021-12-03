import React from "react";
import styles from "./style.module.scss";
import Number from "./components/Number";

class ShoutComponentExampple extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  onClickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className={styles.div}>
        <Number value={this.state.count} />
        <button className={styles.btn} onClick={this.onClickHandler}>
          {" "}
          Click
        </button>
      </div>
    );
  }
}
export default ShoutComponentExampple;
