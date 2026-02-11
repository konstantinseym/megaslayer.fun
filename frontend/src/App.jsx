import "./App.css";
import Hero from "./components/Hero.jsx";
import Core from "./components/Core.jsx";
import Ftr from "./components/Ftr.jsx";

function App() {
  const threadList = [
    {
      threadId: 1,
      threadName: "First thread",
      threadContent: "This is a content in the first thread",
      comments: [
        { commentId: 1, commentContent: "First comment in first thread" },
        { commentId: 2, commentContent: "Second comment in first thread" },
      ],
    },
  ];

  return (
    <div className="app">
      <Hero heroCaptionContent={"megaslayer.fun"} />
      <Core />
      <Ftr ftrCaptionContent={"megaslayer.fun"} />
    </div>
  );
}

export default App;
