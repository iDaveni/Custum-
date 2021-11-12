import React from "react";
import NewsList from "../NewsList";
import styles from "./style.module.scss";
import FormSubscribe from "./components/FormSubscribe";

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
     <NewsList />
      </div>
    );
  }
}

export default Content;
