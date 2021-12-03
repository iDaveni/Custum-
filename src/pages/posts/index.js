import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Form/button";
import Styles from "./style.module.scss";

const PostsItem = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className={Styles.home}>
      {posts.map((item) => (
        <div key={item.id} className={Styles.div}>
          <p className={Styles.pre}>
            <div className={Styles.item}> userId={item.userId} </div>
            <div className={Styles.item}> id={item.id} </div>
            <div className={Styles.item}> title={item.title} </div>
            <div className={Styles.item}> body={item.body} </div>
          </p>
          <Link to={"/posts/" + item.id}>
            <Button>Перейти</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default PostsItem;
