import React from "react";
import MenuItem from "./MenuItem";
import style from "./style.module.scss";
import { connect } from "react-redux";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <MenuItem to="/kursy-programmirovaniya" title="Курсы" />
        <MenuItem to="/besplatnye-probnye-zanatia" title="Мастер-классы" />
        <MenuItem to="/teachers" title="Преподаватели" />
        <MenuItem to="/blog" title="Блог" />
        <MenuItem to="/contact-us" title="Контакты" />
        <div className={style.add}>Сейчас у нас {this.props.items.length} дел</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.todo.items,
  };
}
export default connect(mapStateToProps)(Menu);
