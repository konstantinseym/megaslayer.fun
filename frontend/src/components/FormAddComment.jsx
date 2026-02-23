import "../styles/FormAddComment.css";
import { addComment } from "../api/addcomment.js";
import { useState } from "react";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";
import { AnimatePresence, motion } from "motion/react";

function FormAddComment({ postId, onAddComment }) {
  const [commentTextAreaValue, setCommentTextAreaValue] = useState("");
  const [errorEmptyValue, setErrorEmptyValue] = useState(false);

  function handleChangeTextFieldValue(e) {
    setCommentTextAreaValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (commentTextAreaValue.trim() === "") {
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
        value={commentTextAreaValue}
        onChange={handleChangeTextFieldValue}
      />
      <Btn>place reply</Btn>
      <AnimatePresence>
        {errorEmptyValue && (
          <motion.p
            animate={{ opacity: 1, x: [0, -5, 5, -5, 5, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="formaddcomment__errortext"
          >
            comment can't be empty
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

export default FormAddComment;
