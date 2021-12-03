import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./style.module.scss";

const postsComments = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/posts/" + id + "/comments";

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
          <span className={Styles.pre}>
            <div className={Styles.item}> Post #{item.postId}</div>
            <div className={Styles.item}> {item.id}</div>
            <div className={Styles.item}> {item.name}</div>
            <div className={Styles.item}> {item.email}</div>
            <div className={Styles.item}> {item.body}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default postsComments;
