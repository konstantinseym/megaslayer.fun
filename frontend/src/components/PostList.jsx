import { useState, useEffect } from "react";
import { getPosts } from "../api/getposts.js";
import PostPreview from "./PostPreview.jsx";
import ModalNewThread from "./ModalNewThread.jsx";
import Btn from "./UI/Btn.jsx";
import { useScroll } from "../hooks/useScroll.js";

function PostList() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);
  const handleAddPost = () => renderPosts();
  const [posts, setPosts] = useState([]);
  const isScrolled = useScroll();

  async function renderPosts() {
    const serverData = await getPosts();
    setPosts(serverData);
  }

  useEffect(() => {
    renderPosts();
  }, []);

  return (
    <>
      <ModalNewThread
        isVisible={modalVisible}
        onCloseModal={handleCloseModal}
        onAddPost={handleAddPost}
      />
      <Btn
        style={
          isScrolled
            ? { position: "fixed", top: "7rem", zIndex: "1" }
            : { position: "fixed", top: "9rem", zIndex: "1" }
        }
        onClick={handleOpenModal}
      >
        create thread
      </Btn>

      {posts.map((post) => (
        <PostPreview
          postId={post.id}
          postCaption={post.caption}
          postText={post.text}
          postCreatedAt={post.created_at}
          repliesCount={post.comments_count}
          key={post.id}
        />
      ))}
    </>
  );
}

export default PostList;
