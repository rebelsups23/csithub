import React, { useState } from "react";
import {
  projectAuth,
  projectFirestore,
  timestamp,
} from "../../firebase/config";
import "./NewPostForm.css";

const NewPostForm = () => {
  const [input, setInput] = useState("");
  const postsRef = projectFirestore.collection("posts");
  const { uid, photoURL, displayName } = projectAuth.currentUser;
  const makePost = (e) => {
    e.preventDefault();
    input.trim() &&
      postsRef
        .add({
          post: input.trim(),
          createdAt: timestamp(),
          uid,
          photoURL,
          displayName,
        })
        .then(() => {
          setInput("");
        })
        .catch((err) => {
          console.log(err.message);
        });
  };
  return (
    <div>
      <form onSubmit={makePost}>
        <textarea
          className="post-input"
          name="postinput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Post your doubts"
        ></textarea>
        <input className="btn btn-primary btn-post" type="submit" value="Ask" />
      </form>
    </div>
  );
};

export default NewPostForm;
