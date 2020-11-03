import React from "react";
import { projectFirestore } from "../../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  const postsRef = projectFirestore.collection("posts");
  const query = postsRef.orderBy("createdAt", "desc").limit(25);
  const [posts] = useCollectionData(query, { idField: "id" });
  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} postInfo={post} />)}
    </div>
  );
};

export default Posts;
