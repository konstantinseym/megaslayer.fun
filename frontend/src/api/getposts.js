import axios from "axios";

export const getPosts = async () => {
    try {
    const res = await axios.get("/api/getposts");
    return res.data;
    } catch (err) {
        console.log(err);
        return[];
    }
}