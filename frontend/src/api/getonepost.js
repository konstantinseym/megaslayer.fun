import axios from "axios";

export const getOnePost = async (postId) => {
  try {
    const res = await axios.get("/api/getonepost/" + postId);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
