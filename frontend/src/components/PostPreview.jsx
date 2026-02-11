import "../styles/PostPreview.css";
import Btn from "./UI/Btn.jsx";

function PostPreview() {
  return (
    <div className="postpreview">
      <div className="postpreview__titlecontainer">
        <h2 className="postpreview__caption">
          A few words about this board... Lorem Ipsum
        </h2>
        <p className="postpreview__minortext">00:06 13/11/2026 id: 0001</p>
      </div>
      <p className="postpreview__content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}

export default PostPreview;
