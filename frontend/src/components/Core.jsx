import "../styles/Core.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import PostList from "./PostList.jsx";
import PostPage from "./PostPage.jsx";
import ModalNewThread from "./ModalNewThread.jsx";

function Core() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <main className="core">
      <ModalNewThread isVisible={modalVisible} onCloseModal={handleCloseModal} />
      <Routes>
        <Route path="/" element={<PostList onOpenModal={handleOpenModal} />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </main>
  );
}

export default Core;
