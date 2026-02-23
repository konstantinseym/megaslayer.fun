import "../styles/ModalNewThread.css";
import { useState } from "react";
import { addPost } from "../api/addpost.js";
import TextInput from "./UI/TextInput.jsx";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";
import ErrorMsg from "./UI/ErrorMsg.jsx";

function ModalNewThread({ isVisible, onCloseModal, onAddPost }) {
  const [newPostCaptionValue, setNewPostCaptionValue] = useState("");
  const [newPostTextValue, setNewPostTextValue] = useState("");
  const [errorEmptyValue, setErrorEmptyValue] = useState(false);

  async function FormSubmit(e) {
    e.preventDefault();
    if (newPostCaptionValue.trim() === "" || newPostTextValue.trim() === "") {
      setErrorEmptyValue(true);
      setTimeout(() => {
        setErrorEmptyValue(false);
      }, 3000);
    } else {
      await addPost(newPostCaptionValue, newPostTextValue);
      setNewPostCaptionValue("");
      setNewPostTextValue("");
      setErrorEmptyValue(false);
      onCloseModal();
      onAddPost();
    }
  }

  function handleChangePostCaptionValue(e) {
    setNewPostCaptionValue(e.target.value);
  }

  function handleChangePostTextValue(e) {
    setNewPostTextValue(e.target.value);
  }

  return (
    <div
      className={
        "modalnewthread" + (!isVisible ? " modalnewthread--hidden" : "")
      }
    >
      <h2 className="modalnewthread__caption">new thread</h2>
      <form className="modalnewthread__form" onSubmit={FormSubmit}>
        <TextInput
          value={newPostCaptionValue}
          onChange={handleChangePostCaptionValue}
        />
        <TextField
          value={newPostTextValue}
          onChange={handleChangePostTextValue}
        />
        <div className="modalnewthread__buttonswrapper">
          <Btn type="submit">create</Btn>
          <Btn type="button" onClick={onCloseModal}>
            back
          </Btn>
        </div>
        <ErrorMsg isShown={errorEmptyValue} errMsg={"complete all values"} />
      </form>
    </div>
  );
}

export default ModalNewThread;
