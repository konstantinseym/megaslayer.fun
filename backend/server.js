import express from "express";
import { initTables } from "./db/init.js";
import { pool } from "./db/pool.js";

const app = express();
app.use(express.json());

await initTables();

app.get("/api/getposts", async (req, res) => {
  const postsForClient = await pool.query(
    "SELECT * from posts ORDER BY id DESC",
  );
  res.json(postsForClient.rows);
});

app.get("/api/getonepost/:id", async (req, res) => {
  const postId = req.params.id;
  const postFromDB = await pool.query("SELECT * FROM posts WHERE id = $1", [
    postId,
  ]);
  const commentsFromDB = await pool.query(
    "SELECT * FROM comments WHERE post_id = $1 ORDER BY id ASC",
    [postId],
  );
  const postObject = postFromDB.rows[0];
  const comments = commentsFromDB.rows;
  const postForClient = { ...postObject, comments };
  res.json(postForClient);
});

app.post("/api/addcomment", async (req, res) => {
  const commentFromClient = req.body;
  await pool.query("INSERT INTO comments (post_id, text) VALUES ($1, $2);", [
    commentFromClient.postId,
    commentFromClient.text,
  ]);
  res.status(201);
});

app.post("/api/addpost", async (req, res) => {
  const postFromClient = req.body;
  await pool.query("INSERT INTO posts (caption, text) VALUES ($1, $2);", [
    postFromClient.caption,
    postFromClient.text,
  ]);
  res.status(201);
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
