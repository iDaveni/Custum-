import React from "react";
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";
import styles from "../app/style.module.scss";


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
