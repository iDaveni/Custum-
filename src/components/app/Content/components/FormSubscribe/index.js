import React from "react";
import styles from "./style.module.scss";
import Button from "../../../../Form/button";
import Input from "../../../../Form/input";

class FormSubscribe extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { phone: "", promo: "", hasError: false };
  }
  handleChange = (e, input) => this.setState({ [input]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.phone === "") {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
  };

  onChangePhone = (e) => {
    this.handleChange(e, "phone");
  };
  onChangePromo = (e) => {
    this.handleChange(e, "promo");
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <Input
          type="tel"
          onChange={this.onChangePhone}
          placeholder="Номер Телефона"
        />
        <Input
          type="password"
          onChange={this.onChangePromo}
          placeholder="Промокод"
        />
        {this.state.hasError && <div className={styles.error}>Пожалуйста, заполните все обязательные поля</div>}
        <Button>Записаться</Button>
      </form>
    );
  }
}

export default FormSubscribe;
