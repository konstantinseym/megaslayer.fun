import axios from "axios";

export async function addPost(caption, text) {
  try {
    axios.post("/api/addpost", { caption, text });
  } catch (err) {
    console.log(err);
  }
}
