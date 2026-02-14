import "../styles/ModalNewThread.css";
import TextInput from "./UI/TextInput.jsx";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";

function FormSubmit(e) {
  e.preventDefault();
}

function ModalNewThread() {
  return (
    <div className="modalnewthread">
      <h2 className="modalnewthread__caption">create new thread</h2>
      <form className="modalnewthread__form" onSubmit={FormSubmit}>
        <TextInput />
        <TextField />
        <Btn>create thread</Btn>
        <Btn>back</Btn>
      </form>
    </div>
  );
}

export default ModalNewThread;
