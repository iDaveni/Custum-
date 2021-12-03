import React, {useContext} from "react";
import Input from "../../../../../../Form/input";
import Styles from "./style.module.scss";
import { intro } from "../..";

const LeftSide = () => {
  const { value,onChangeInput } = useContext(intro);
  return (
    <div className={Styles.leftside}>
      <p className={Styles.text}> LeftSide </p>
      <Input placeholder="Input" onChange={onChangeInput} value={value} />
      {value}
    </div>
  );
};

export default LeftSide;
