import "../styles/FormAddComment.css";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";

function FormSubmit(e) {
  e.preventDefault();
}

function FormAddComment() {
  return (
    <form className="formaddcomment" onSubmit={FormSubmit}>
      <TextField />
      <Btn>place reply</Btn>
    </form>
  );
}

export default FormAddComment;
