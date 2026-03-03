import "../styles/FormAddComment.css";
import { addComment } from "../api/addcomment.js";
import { useRef, useState } from "react";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";
import ErrorMsg from "./UI/ErrorMsg.jsx";

function FormAddComment({ postId, onAddComment }) {
  const [commentTextAreaValue, setCommentTextAreaValue] = useState("");
  const [errorEmptyValue, setErrorEmptyValue] = useState(false);
  const textFieldRef = useRef(null);

  function handleChangeTextFieldValue(e) {
    setCommentTextAreaValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (commentTextAreaValue.trim() === "") {
      textFieldRef.current.focus();
      setErrorEmptyValue(true);
      setTimeout(() => {
        setErrorEmptyValue(false);
      }, 3000);
    } else {
      await addComment(postId, commentTextAreaValue);
      setCommentTextAreaValue("");
      setErrorEmptyValue(false);
      onAddComment();
    }
  }

  return (
    <form className="formaddcomment" onSubmit={handleSubmit}>
      <TextField
        ref={textFieldRef}
        value={commentTextAreaValue}
        onChange={handleChangeTextFieldValue}
      />
      <Btn>place reply</Btn>
      <ErrorMsg isShown={errorEmptyValue} errMsg={"comment can't be empty"} />
    </form>
  );
}

export default FormAddComment;
