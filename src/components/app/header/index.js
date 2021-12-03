import React from "react";
import style from "./style.module.scss";
import Menu from "./components/Menu";
import Number from "./components/Number";


class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <Menu />
        <Number />
      </div>
    );
  }
}

export default Header;
