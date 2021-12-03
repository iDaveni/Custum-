import React from "react";
import NewsList from "../NewsList";
import styles from "./style.module.scss";
import SmallImage from "components/Versions/SmallAsset";
import PrevieAsset from "components/Versions/PrevieAsset";
import Svg from "asset/1233.png";
import FunctionComponentHolder from "./components/FunctionComponentHolder";
import Todose from "./components/FormTodo";
import Users from "./components/Users";
import HomeWork from "./components/HomeWork";
import VideoPlayer from "./components/VideoPlayer";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import CoursePage from "pages/CoursePage";
import BPZ from "../../../pages/besplatnye-probnye-zanatia";
import Teachers from "../../../pages/teachers";
import Blog from "../../../pages/blog";
import Contact from "../../../pages/contact-us";
import UsersPage from "../../../pages/UsersPage";
import UserDetailPage from "../../../pages/UserDetailPage";
import MyAccaunt from "../../../pages/MyAccaunt";
import DownloadPage from "../../../pages/downloadPage";
import PostsItem from "../../../pages/posts";
import PostsDetails from "../../../pages/postsDetails";
import PostsComments from "../../../pages/postsComments";

class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kursy-programmirovaniya" element={<CoursePage />} />
          <Route path="/besplatnye-probnye-zanatia" element={<BPZ />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="/my-accaunt" element={<MyAccaunt />}>
            <Route path="download" element={<DownloadPage />} />
          </Route>
          <Route path="/posts" element={<PostsItem />} />
          <Route path="/posts/:id" element={<PostsDetails />}></Route>
          <Route path="/posts/:id/comments" element={<PostsComments />} />
        </Routes>
      </div>
    );
  }
}

export default Content;
