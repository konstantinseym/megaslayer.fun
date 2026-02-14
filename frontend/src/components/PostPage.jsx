import "../styles/PostPage.css";
import { getOnePost } from "../api/getonepost.js";
import { useState, useEffect } from "react";
import Reply from "./Reply.jsx";
import FormAddComment from "./FormAddComment.jsx";

function PostPage() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      const query = new URLSearchParams(window.location.search);
      const postId = query.get("id");
      const serverData = await getOnePost(postId);
      setPost(serverData);
    })();
  }, []);

  if (!post) return <></>;

  console.log(post.comments);

  return (
    <div className="postpage">
      <div className="postpage__post">
        <div className="postpage__titlecontainer">
          <h2 className="postpage__caption">{post.caption}</h2>
          <p className="postpage__minortext">{post.created_at}</p>
        </div>
        <p className="postpage__content">{post.text}</p>
      </div>
      <div className="postpage__replies">
        {post.comments.map((comment) => (
          <Reply
            key={comment.id}
            commentText={comment.text}
            commentCreatedAt={comment.created_at}
          />
        ))}
        <FormAddComment />
      </div>
    </div>
  );
}
export default PostPage;
