import React, { useEffect, useState } from "react";
import List from "./components/List";
import { connect } from "react-redux";
import { removeUsers } from "../../../../../redux/actions/users";


const Users = ({ items, removeUsers }) => {
  return <List onDeleteUser={removeUsers} items={items} />;
};

function mapStateToProps(state) {
  return {
    items: state.users,
  };
}

const mapDispatchToProps = {
  removeUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
