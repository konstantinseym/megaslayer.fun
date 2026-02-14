import "../styles/FormAddComment.css";
import { addComment } from "../api/addcomment.js";
import { useState } from "react";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";

function FormAddComment({ postId, onAddComment }) {
  const [commentTextAreaValue, setCommentTextAreaValue] = useState("");

  function handleChangeTextFieldValue(e) {
    setCommentTextAreaValue(e.target.value);
  }

  function FormSubmit(e) {
    e.preventDefault();
    addComment(postId, commentTextAreaValue);
    setCommentTextAreaValue("");
    onAddComment();
  }

  return (
    <form className="formaddcomment" onSubmit={FormSubmit}>
      <TextField
        value={commentTextAreaValue}
        onChange={handleChangeTextFieldValue}
      />
      <Btn>place reply</Btn>
    </form>
  );
}

export default FormAddComment;
