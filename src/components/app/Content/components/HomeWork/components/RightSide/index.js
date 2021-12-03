import React, { useContext } from "react";
import Input from "../../../../../../Form/input";
import Styles from "./style.module.scss";
import { intro } from "../..";

const RightSide = () => {

  const { value,onChangeInput } = useContext(intro);
  return (
    <div className={Styles.rightside}>
      <p className={Styles.text}> RightSide </p>
      <Input placeholder="Input" onChange={onChangeInput} value={value} />
      {value}
    </div>
  );
};

export default RightSide;
