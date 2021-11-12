import React from "react";
import style from "./style.module.scss";
import Menu from "./components/Menu";
import Logo from "./Logo/logo.svg";
import SocialLinks from "./components/SocialLinks";

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <a href="">
          <Logo />
        </a>
        <Menu />
        <SocialLinks />
      </div>
    );
  }
}

export default Header;
