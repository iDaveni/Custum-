import React, { useState, useEffect } from "react";
import axios from "axios";

const Todose = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    axios.get("https://todo-fe57.herokuapp.com/todo").then((response) => {
      const items = response.data.map((item) => {
        return {
          id: item._id,
          title: item.title,
        };
      });
      setTodo(items);
    });
  };
  console.log(todo);

  return (
    <div>
      <div>
        {todo.map((item) => (
          <div key={item.id}>
            {item.id} {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todose;
