import "../styles/Reply.css";

function Reply({ commentText, commentCreatedAt }) {
  return (
    <div className="reply">
      <p className="reply__minortext">{commentCreatedAt}</p>
      <p className="reply__content">{commentText}</p>
    </div>
  );
}

export default Reply;
