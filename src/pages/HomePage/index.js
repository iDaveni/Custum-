import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";
import { connect } from "react-redux";
import Button from "../../components/Form/button";
import { addTodo, removeTodo } from "../../redux/actions/todo";
import Input from "../../components/Form/input";

const HomePage = () => {
  return (
    <div className={Styles.home}>
      <h1>Home Page</h1>
      <Link className={Styles.link} to="/kursy-programmirovaniya">
        Link To kursy-programmirovaniya Page
      </Link>
      <Link className={Styles.link} to="/besplatnye-probnye-zanatia">
        Link To besplatnye-probnye-zanatia Page
      </Link>
      <Link className={Styles.link} to="/teachers">
        Link To teachers Page
      </Link>
      <Link className={Styles.link} to="/blog">
        Link To blog Page
      </Link>
      <Link className={Styles.link} to="/contact-us">
        Link To contact Page
      </Link>
      <Link className={Styles.link} to="/users">
        Users
      </Link>
      <Link className={Styles.link} to="/my-accaunt">
        My-accaunt
      </Link>
      <Link className={Styles.link} to="/posts">
        posts
      </Link>
    </div>
  );
};
// function mapStateToProps(state) {
//   return {
//     items: state.todo.items,
//   };
// }

// const mapDispatchToProps = {
//   addTodo,
//   removeTodo,
// };
export default HomePage