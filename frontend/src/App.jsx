import "./App.css";
import Hero from "./components/Hero.jsx";
import Core from "./components/Core.jsx";
import Ftr from "./components/Ftr.jsx";

function App() {
  return (
    <div className="app">
      <Hero heroCaptionContent={"megaslayer.fun"} />
      <Core />
      <Ftr ftrCaptionContent={"megaslayer.fun"} />
    </div>
  );
}

export default App;
