import React, { useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Styles from "./style.module.scss";

const intro = React.createContext();
const { Provider } = intro;

const HomeWork = () => {
  const [value, setValue] = useState("");

  const onChangeInput = (value) => {
    setValue(value);
  };
  return (
    <Provider value={{ onChangeInput, value }}>
      <div className={Styles.homework}>
        <p> HomeWork </p>
        <div className={Styles.leftright}>
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </Provider>
  );
};
export { intro };
export default HomeWork;
