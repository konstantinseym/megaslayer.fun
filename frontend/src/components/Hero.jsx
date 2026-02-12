import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero({ heroCaptionContent }) {
  return (
    <header className="hero">
      <Link to={"/"}>
        <h1 className="hero__caption">{heroCaptionContent}</h1>
      </Link>
    </header>
  );
}

export default Hero;
