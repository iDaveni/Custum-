import React, { useCallback, useContext } from "react";
import Button from "../../../../../../../../Form/button";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeUsers } from "../../../../../../../../../redux/actions/users";

const UserItem = ({ name, age, id, dispatch }) => {

  const onClickHandler = useCallback(() => {
    dispatch(removeUsers(id))
  });
  return (
    <div className={Styles.item}>
      <Link to={"/users/" + id}>
        Name: {name} | Age: {age}
      </Link>
      <div>
        <Button onClick={onClickHandler}>Delete</Button>
      </div>
    </div>
  );
};

export default connect()(UserItem);
