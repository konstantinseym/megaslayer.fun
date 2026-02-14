import "../styles/ModalNewThread.css";
import { useState } from "react";
import { addPost } from "../api/addpost.js";
import TextInput from "./UI/TextInput.jsx";
import TextField from "./UI/TextField.jsx";
import Btn from "./UI/Btn.jsx";

function ModalNewThread({ isVisible, onCloseModal }) {
  const [newPostCaptionValue, setNewPostCaptionValue] = useState("");
  const [newPostTextValue, setNewPostTextValue] = useState("");

  function FormSubmit(e) {
    e.preventDefault();
    addPost(newPostCaptionValue, newPostTextValue);
    setNewPostCaptionValue("");
    setNewPostTextValue("");
    onCloseModal();
  }

  function handleChangePostCaptionValue(e) {
    setNewPostCaptionValue(e.target.value);
  }

  function handleChangePostTextValue(e) {
    setNewPostTextValue(e.target.value);
  }

  return (
    <div className={"modalnewthread" + (!isVisible ? " modalnewthread--hidden" : "")}>
      <h2 className="modalnewthread__caption">create new thread</h2>
      <form className="modalnewthread__form" onSubmit={FormSubmit}>
        <TextInput
          value={newPostCaptionValue}
          onChange={handleChangePostCaptionValue}
        />
        <TextField
          value={newPostTextValue}
          onChange={handleChangePostTextValue}
        />
        <Btn type="submit">create thread</Btn>
        <Btn type="button" onClick={onCloseModal}>back</Btn>
      </form>
    </div>
  );
}

export default ModalNewThread;
