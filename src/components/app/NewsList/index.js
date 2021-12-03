import React from "react";
import styles from "./style.module.scss";
import array from "./array";
import Button from "../../Form/button";
import Input from "../../Form/input";
import axios from "axios";
import withItem from "hoc/withItem";
class NewsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.lastId = 12;
  }
  onClickHandler = (id) => {
    this.props.delete(id);
  };

  onClickCreateItem = () => {
    this.props.create(this.state.name);
  };
  onChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Input onChange={this.onChangeHandler}  placeholder="Введите данные"/>
          Введите Новый -Item-
          <Button onClick={this.onClickCreateItem}>Add New Item </Button>
        </div>
        <div>
          List New
          {this.props.items.map((item) => (
            <div className={styles.id} key={item.id}>
              <span className={styles.name}>Результат - {item.title}</span>
              <span className={styles.describe}>{item.describe}</span>
              <Button onClick={() => this.onClickHandler(item.id)}>
                {" "}
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withItem(NewsList);
