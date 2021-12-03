import React, { useState, useEffect, useCallback, useMemo } from "react";
import Button from "../../../../Form/button";
import Input from "../../../../Form/input";

const users = [
  { name: "Pasha", age: "10" },
  { name: "Pasha1", age: "15" },
  { name: "Pasha2", age: "25" },
  { name: "Pasha3", age: "30" },
  { name: "Pasha4", age: "35" },
];

const FunctionComponentHolder = ({ title }) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const adult = useMemo(() => {
    return  users.filter((user) => user.age >= 10 && user.age < 20);
  }, []);

  const onChangeInput = (value) => {
    setValue(value);
  };

  const onClickHandler = useCallback(() => {
    console.log("work", value);
  }, []);

  return (
    <div>
      <div>
        <Input onChange={onChangeInput} />
        {value}
      </div>
      <Button onClick={onClickHandler}>Click</Button>
      {adult.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default FunctionComponentHolder;
