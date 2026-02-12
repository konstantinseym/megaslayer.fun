import "../styles/Core.css";
import { Routes, Route } from "react-router-dom";
import PostList from "./PostList.jsx";
import PostPage from "./PostPage.jsx";

function Core() {
  return (
    <main className="core">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </main>
  );
}

export default Core;
