import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <Link to={"/"}>
        <h1 className="hero__caption">megaslayer.fun</h1>
      </Link>
    </header>
  );
}

export default Hero;
