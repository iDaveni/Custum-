import React from "react";
import axios from "axios";

function withItem(Component) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        items: [],
      };
    }
    componentDidMount() {
      this.loadUpdate();
    }

    loadUpdate = () => {
      axios.get("https://todo-fe57.herokuapp.com/todo").then((response) => {
        const items = response.data.map((item) => {
          return {
            id: item._id,
            title: item.title,
          };
        });

        this.setState({
          items: items,
        });
      });
    };
    createItem = (title) => {
      const data = new FormData();
      data.append("title", title);
      const url = "https://todo-fe57.herokuapp.com/todo";
      axios.post(url, data).then(() => {
        this.loadUpdate();
      });
    };

    deleteItem = (id) => {
      const url = "https://todo-fe57.herokuapp.com/todo";
      axios.delete(url + "/" + id).then(() => {
        this.loadUpdate();
      });
    };
    render() {
      return (
        <Component
          items={this.state.items}
          create={this.createItem}
          delete={this.deleteItem}
        />
      );
    }
  };
}

export default withItem;
