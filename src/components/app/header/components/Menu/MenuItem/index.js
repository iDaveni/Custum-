import React from "react";
import Styles from "./style.module.scss";
import { Link, NavLink } from "react-router-dom";

class MenuItem extends React.Component {
  getClass = (state) => {
    return Styles.item + (state.isActive ? ` ${Styles.active}` : "");
  };

  render() {
    return (
      <div>
        <NavLink className={this.getClass} to={this.props.to}>
          {this.props.title}
        </NavLink>
      </div>
    );
  }
}
export default MenuItem;
