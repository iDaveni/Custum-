import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Form/button";

const UserDetailPage = () => {
  const [users, setUsers] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // const newList = usersList.find((item) => item.id == id);
    // console.log(newList);
    // setUsers(newList);
  }, []);
  return (
    <div>
      Detail page of user
      <div>Id {users.id}</div>
      <div>Name:{users.name}</div>
      <div>Age: {users.age}</div>
    </div>
  );
};

export default UserDetailPage;
