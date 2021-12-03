import React, { useContext } from "react";
import Styles from "./style.module.scss";
import UserItem from "./components/UserItem";

const List = ({items}) => {
  return (
    <div className={Styles.list}>
      {items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
        />
      ))}
    </div>
  );
};


export default List;
