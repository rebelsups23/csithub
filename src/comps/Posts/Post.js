import React from "react";

const Post = (props) => {
  const { post, photoURL, displayName } = props.postInfo;
  return (
    <div className="post-container">
      <div className="post">
        <img className="user-image" src={photoURL} alt="dp" />
        <h3 className="post-heading">{displayName} asked a question</h3>
      </div>
      <p className="post-content">{post}</p>
    </div>
  );
};

export default Post;
