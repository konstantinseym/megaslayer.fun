import axios from "axios";

export async function addComment(postId, text) {
  try {
    await axios.post("/api/addcomment", { text, postId });
  } catch (err) {
    console.log(err);
  }
}
