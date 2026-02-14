import "../styles/PostPage.css";
import Reply from "./Reply.jsx";
import FrormAddComment from "./FormAddComment.jsx";

function PostPage() {
  return (
    <div className="postpage">
      <div className="postpage__post">
        <div className="postpage__titlecontainer">
          <h2 className="postpage__caption">
            Lorem Ipsum
          </h2>
          <p className="postpage__minortext">00:06 13/11/2026 id: 0001</p>
        </div>
        <p className="postpage__content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="postpage__replies">
        <Reply />
        <Reply />
        <FrormAddComment />
      </div>
    </div>
  );
}
export default PostPage;
