import PostPreview from "./PostPreview.jsx";
import Btn from "./UI/Btn.jsx";
import { getPosts } from "../api/getposts.js";
import { useState, useEffect } from "react";

function PostList({ onOpenModal }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const serverData = await getPosts();
      setPosts(serverData);
    })();
  }, []);

  return (
    <>
      <Btn onClick={onOpenModal}>create thread</Btn>
      {posts.map((post) => (
        <PostPreview
          postId={post.id}
          postCaption={post.caption}
          postText={post.text}
          postCreatedAt={post.created_at}
          key={post.id}
        />
      ))}
    </>
  );
}

export default PostList;
