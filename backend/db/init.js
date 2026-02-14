import { pool } from "./pool.js";

export async function initTables() {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS posts (id BIGSERIAL PRIMARY KEY, caption TEXT NOT NULL, text TEXT NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT NOW())",
    );
    await pool.query(
      "CREATE TABLE IF NOT EXISTS comments (id BIGSERIAL PRIMARY KEY, post_id BIGINT NOT NULL REFERENCES  posts(id) ON DELETE CASCADE, text TEXT NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT NOW())",
    );
    await pool.query(
      "CREATE INDEX IF NOT EXISTS idx_comments_post_id_id ON comments (post_id, id DESC)",
    );
    console.log("tables initialized");
  } catch (err) {
    console.log(err);
  }
}
