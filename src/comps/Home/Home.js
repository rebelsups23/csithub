import React from "react";
import NewPostForm from "../NewPostForm/NewPostForm";
import Posts from "../Posts/Posts";
import "./Home.css";

const Home = ({ user }) => {
  return (
    <div className="container">
      <NewPostForm />
      <Posts />
    </div>
  );
};

export default Home;
