import "../styles/PostPreview.css";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

function PostPreview({ postId, postCaption, postText, postCreatedAt, repliesCount }) {
    return (
    <div className="postpreview">
      <div className="postpreview__titlecontainer">
        <Link to={"/post?id=" + postId}>
          <h2 className="postpreview__caption">{postCaption}</h2>
        </Link>
        <p className="postpreview__minortext">{formatDate(postCreatedAt)}</p>
      </div>
      <p className="postpreview__content">{postText}</p>
      <p className="postpreview__minortext">{repliesCount} replies</p>
    </div>
  );
}

export default PostPreview;
