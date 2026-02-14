import "../styles/PostPreview.css";
import { Link } from "react-router-dom";

function PostPreview({ postId, postCaption, postText, postCreatedAt }) {
  return (
    <div className="postpreview">
      <div className="postpreview__titlecontainer">
        <Link to={"/post?id=" + postId}>
          <h2 className="postpreview__caption">{postCaption}</h2>
        </Link>
        <p className="postpreview__minortext">{postCreatedAt} {postId}</p>
      </div>
      <p className="postpreview__content">{postText}</p>
    </div>
  );
}

export default PostPreview;
