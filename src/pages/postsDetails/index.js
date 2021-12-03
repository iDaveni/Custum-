import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Form/button";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";

const PostsDetails = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/posts/" + id;

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
    <div className={Styles.div} key={posts.id}>
      <div className={Styles.pre}>
        Post - Details
        <div className={Styles.item}> Post {posts.id}</div>
        <div className={Styles.item}> {posts.userId}</div>
        <div className={Styles.item}> {posts.title}</div>
        <div className={Styles.item}> {posts.body}</div>
        <Link to={"/posts/" + posts.id + "/comments"}>
          <Button>Comments</Button>
        </Link>
      </div>
    </div>
  );
};
export default PostsDetails;
